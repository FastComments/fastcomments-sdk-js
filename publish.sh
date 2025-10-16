#!/bin/bash

set -e

echo "Building the SDK..."
npm run build

echo "Running browser compatibility tests..."
npm run test:browser

echo "Running pre-publish checks..."
npm pack --dry-run

echo "Publishing to npm..."
npm publish --access public

echo "SDK published successfully!"