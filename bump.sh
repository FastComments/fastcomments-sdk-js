#!/bin/bash

set -e

if [ -z "$1" ]; then
  echo "Usage: ./bump.sh <new_version>"
  echo "Example: ./bump.sh 0.0.2"
  exit 1
fi

NEW_VERSION=$1

echo "Bumping version to $NEW_VERSION..."

# Update config.json - both npmVersion and packageVersion
jq ".npmVersion = \"$NEW_VERSION\" | .packageVersion = \"$NEW_VERSION\"" config.json > config.json.tmp && mv config.json.tmp config.json

echo "✓ Updated config.json npmVersion and packageVersion to $NEW_VERSION"

# Update package.json version
jq ".version = \"$NEW_VERSION\"" package.json > package.json.tmp && mv package.json.tmp package.json

echo "✓ Updated package.json version to $NEW_VERSION"
echo "Done! Version bumped to $NEW_VERSION"
