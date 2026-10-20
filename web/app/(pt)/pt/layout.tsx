import { fontVariables } from "@/lib/fonts";
import "../../globals.css";

export { viewport } from "@/lib/metadata";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
