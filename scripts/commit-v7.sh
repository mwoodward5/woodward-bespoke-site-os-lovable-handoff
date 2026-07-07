#!/usr/bin/env bash
# Renderer V7 commit — run from repo root once .git/index.lock is clear.
set -e
git add app docs/launch docs/templates api vercel.json .gitignore \
  factory/pipeline/05-build-v6.mjs factory/pipeline/05-build-v7.mjs \
  factory/lib/ambiance-v7.mjs \
  asset-pipeline/gbp-deep.mjs asset-pipeline/logo-candidates.mjs \
  qc-audit/qc-v7-ext.mjs
git commit -m "Renderer V7: media engine (uploads + AI logo candidates + labeled ambiance), GBP deep import (hours/reviews/photos/latlng), MapLibre+Esri satellite map, Remic single-page + premier multi-page architectures, optimization scorecard, QC-V7 gate. QC 11/11 + 3/3, both Vercel targets live."
echo "committed."
