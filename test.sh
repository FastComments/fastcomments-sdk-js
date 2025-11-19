#!/bin/bash

set -e

echo "Running FastComments JavaScript/TypeScript SDK tests..."

# Check required environment variables
if [ -z "$FASTCOMMENTS_API_KEY" ] || [ -z "$FASTCOMMENTS_TENANT_ID" ]; then
  echo "Error: FASTCOMMENTS_API_KEY and FASTCOMMENTS_TENANT_ID environment variables must be set"
  exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build if needed
if [ ! -d "dist" ]; then
  echo "Building the SDK..."
  npm run build
fi

echo "Running unit tests..."
npm run test:unit

echo ""
echo "Running integration tests..."
npm run test:integration

echo ""
echo "Running browser compatibility tests..."
npm run test:browser

echo ""
echo "✓ All tests passed!"
