#!/usr/bin/env bash
# Builds a ready-to-upload package for Namecheap (or any cPanel) shared hosting.
# Usage:  NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com bash scripts/package-namecheap.sh
# Output: deploy/opencanvas-namecheap.zip  → upload, extract, point "Setup Node.js App" at it.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -z "${NEXT_PUBLIC_SITE_URL:-}" ]; then
  echo "Set NEXT_PUBLIC_SITE_URL first, e.g. NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com" >&2
  exit 1
fi

rm -rf .next deploy
STANDALONE=1 IMAGES_UNOPTIMIZED=1 NEXT_TELEMETRY_DISABLED=1 npx next build

OUT=deploy/opencanvas
mkdir -p "$OUT"
cp -r .next/standalone "$OUT/site"
cp -r .next/static "$OUT/site/.next/static"
cp -r public "$OUT/site/public"
# The image optimiser is switched off for shared hosting, so its native library isn't needed.
rm -rf "$OUT/site/node_modules/sharp" "$OUT/site/node_modules/@img"
# Never ship local secrets
rm -f "$OUT/site/.env" "$OUT/site/.env.local" "$OUT/site/.env.production"

# cPanel's Node.js selector manages its own node_modules link in the app root,
# so the app lives in ./site and a tiny app.js starts it.
cat > "$OUT/app.js" <<'JS'
// Startup file for cPanel "Setup Node.js App" (Phusion Passenger).
process.env.NODE_ENV = 'production';
require('./site/server.js');
JS
cat > "$OUT/package.json" <<'JSON'
{
  "name": "open-canvas-marketing",
  "version": "1.0.0",
  "private": true,
  "main": "app.js",
  "scripts": { "start": "node app.js" },
  "engines": { "node": ">=20.9.0" }
}
JSON

(cd deploy && zip -qr opencanvas-namecheap.zip opencanvas)
echo "Done: deploy/opencanvas-namecheap.zip ($(du -h deploy/opencanvas-namecheap.zip | cut -f1))"
