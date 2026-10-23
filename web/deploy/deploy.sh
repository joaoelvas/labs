#!/bin/bash
# Builds the static export and switches the Raspberry Pi over to it. Run from web/ by the
# deploy-web GitHub workflow on the Pi's self-hosted runner, or by hand.
#   /opt/venleylabs-web/build             where it builds: keeps node_modules and Next's cache
#   /opt/venleylabs-web/releases/<sha>    one folder per deploy; current -> the live one
set -euo pipefail

BASE=/opt/venleylabs-web
RELEASE="$BASE/releases/$(git rev-parse --short HEAD)-$(date +%Y%m%d%H%M%S)"
PORT=3001
WORK="$BASE/build"

# Build outside the checkout, which the runner wipes, so node_modules and the build cache
# survive between deploys. npm ci only runs when the lockfile changes.
mkdir -p "$WORK"
rsync -a --delete --exclude /node_modules --exclude /.next ./ "$WORK/"
cd "$WORK"
LOCK="$(sha256sum package-lock.json | cut -d' ' -f1)"
if [[ -d node_modules && "$(cat "$BASE/.build-lock" 2>/dev/null)" == "$LOCK" ]]; then
    echo "▸ Dependencies unchanged"
else
    echo "▸ Installing dependencies…"
    rm -f "$BASE/.build-lock"
    npm ci --no-audit --no-fund
    echo "$LOCK" > "$BASE/.build-lock"
fi
echo "▸ Building…"
NEXT_TELEMETRY_DISABLED=1 npm run build

# out/ includes serve.json, which serve reads for clean URLs and the response headers.
echo "▸ Assembling $RELEASE…"
mkdir -p "$RELEASE"
cp -a out/. "$RELEASE/"

PREVIOUS=""
[[ -L "$BASE/current" ]] && PREVIOUS="$(readlink -f "$BASE/current")"
ln -sfn "$RELEASE" "$BASE/current"
sudo systemctl restart venleylabs-web

echo "▸ Checking the site…"
for _ in $(seq 1 30); do
    if curl -fsS --max-time 10 -o /dev/null "http://127.0.0.1:$PORT/"; then
        echo "✓ Live: $RELEASE"
        # Keep the last three releases.
        ls -1dt "$BASE"/releases/*/ | tail -n +4 | xargs -r rm -rf
        exit 0
    fi
    sleep 2
done

echo "✗ The new release didn't answer; rolling back."
sudo journalctl -u venleylabs-web -n 40 --no-pager || true
if [[ -n "$PREVIOUS" && -d "$PREVIOUS" && "$PREVIOUS" != "$RELEASE" ]]; then
    ln -sfn "$PREVIOUS" "$BASE/current"
    sudo systemctl restart venleylabs-web
fi
exit 1
