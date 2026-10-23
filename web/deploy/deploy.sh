#!/bin/bash
# Builds the static export on this machine and ships it to the Raspberry Pi, where nginx
# serves it. Run from web/: npm run deploy. PI_HOST overrides the SSH target (default: raspi over Tailscale).
#   /opt/venleylabs-web/releases/<sha>-<time>  one folder per deploy; current -> the live one
#   /etc/nginx/sites-available/venleylabs     deploy/nginx.conf, reloaded when it changes
set -euo pipefail

PI="${PI_HOST:-joaoelvas@raspi}"
BASE=/opt/venleylabs-web

cd "$(dirname "$0")/.."
SHA="$(git rev-parse --short HEAD)"
[[ -n "$(git status --porcelain -- .)" ]] && SHA="$SHA-dirty"
RELEASE="$BASE/releases/$SHA-$(date +%Y%m%d%H%M%S)"

echo "▸ Building…"
NEXT_TELEMETRY_DISABLED=1 npm run build

echo "▸ Uploading ${RELEASE}…"
# Start from a hard-linked copy of the live release, so rsync only sends what changed.
ssh "$PI" "mkdir -p '$BASE/releases' && if [ -d '$BASE/current' ]; then cp -al '$BASE/current/.' '$RELEASE'; fi"
rsync -rlt --checksum --delete out/ "$PI:$RELEASE/"
rsync -t deploy/nginx.conf "$PI:$BASE/nginx.conf"

ssh "$PI" bash -s -- "$BASE" "$RELEASE" <<'REMOTE'
set -euo pipefail
BASE=$1 RELEASE=$2 SITE=/etc/nginx/sites-available/venleylabs

if ! cmp -s "$BASE/nginx.conf" "$SITE"; then
    echo "▸ Updating the nginx config…"
    [[ -f "$SITE" ]] && sudo cp "$SITE" "$SITE.bak"
    sudo cp "$BASE/nginx.conf" "$SITE"
    sudo ln -sfn "$SITE" /etc/nginx/sites-enabled/venleylabs
    if ! sudo nginx -t -q; then
        echo "✗ nginx rejected the config; keeping the old one."
        if [[ -f "$SITE.bak" ]]; then sudo mv "$SITE.bak" "$SITE"; else sudo rm -f "$SITE" /etc/nginx/sites-enabled/venleylabs; fi
        exit 1
    fi
    sudo systemctl reload nginx
fi

PREVIOUS=""
[[ -L "$BASE/current" ]] && PREVIOUS="$(readlink -f "$BASE/current")"
# Swap the link in one rename, so no request sees it missing.
ln -sfn "$RELEASE" "$BASE/current.new" && mv -T "$BASE/current.new" "$BASE/current"

echo "▸ Checking the site…"
if curl -fsS --max-time 10 -o /dev/null http://127.0.0.1:3001/ \
    && curl -fsS --max-time 10 -o /dev/null http://127.0.0.1:3001/pt/; then
    echo "✓ Live: $RELEASE"
    # Keep the last three releases.
    ls -1dt "$BASE"/releases/*/ | tail -n +4 | xargs -r rm -rf
    exit 0
fi

echo "✗ The new release didn't answer; rolling back."
if [[ -n "$PREVIOUS" && -d "$PREVIOUS" && "$PREVIOUS" != "$RELEASE" ]]; then
    ln -sfn "$PREVIOUS" "$BASE/current.new" && mv -T "$BASE/current.new" "$BASE/current"
fi
exit 1
REMOTE
