#!/bin/bash
# Rebuild viz from llm/viz and deploy to steve repo
set -e

VIZ_SRC="$HOME/Desktop/Research/Effective Python/llm/viz"
STEVE="$HOME/Desktop/Research/steve"

echo "Building viz..."
cd "$VIZ_SRC" && npm run build

echo "Copying to steve/viz..."
rm -rf "$STEVE/viz"
cp -r "$VIZ_SRC/dist" "$STEVE/viz"

echo "Committing and pushing..."
cd "$STEVE"
git add viz/
git commit -m "Update viz dashboard"
git push origin main

echo "Done — site will update in ~1 min"
