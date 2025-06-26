#!/bin/bash

set -e

echo "Building the SDK..."
npm run build

echo "Running pre-publish checks..."
npm pack --dry-run

echo "Publishing to npm..."
npm publish --access public

echo "SDK published successfully!"