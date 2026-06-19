#!/bin/bash

set -euo pipefail

npm i

SPEC_FILE="./openapi.json"

# Try to download a fresh OpenAPI spec from the running FastComments server.
# Fetch to a temp file first and validate it before touching the committed spec,
# so a failed/empty fetch can never clobber ./openapi.json or wipe ./src/generated.
TMP_SPEC="$(mktemp)"
trap 'rm -f "$TMP_SPEC"' EXIT

if wget -q http://localhost:3001/js/swagger.json -O "$TMP_SPEC" \
    && [ -s "$TMP_SPEC" ] \
    && npm exec -- node -e "JSON.parse(require('fs').readFileSync(process.argv[1],'utf8'))" "$TMP_SPEC" >/dev/null 2>&1; then
    echo "Downloaded OpenAPI spec from running server"
    mv "$TMP_SPEC" "$SPEC_FILE"
else
    echo "Could not fetch a valid spec from the server; using committed $SPEC_FILE"
    if [ ! -s "$SPEC_FILE" ]; then
        echo "ERROR: $SPEC_FILE is missing or empty and the server is unavailable. Aborting." >&2
        exit 1
    fi
fi

# Only remove generated output once we know we have a valid spec to regenerate from.
rm -rvf ./src/generated

# Generate the TypeScript client.
# Clean response type names come from the spec: tsoa splits `X | APIError` returns so the 2xx
# response is the real success type and APIError is a `default` error response (errorResponseTypeNames),
# and titles any remaining inline schemas as <OperationId>... (useTitleTagsForInlineObjects). So each
# operation returns its actual success model (e.g. deleteVote -> VoteDeleteResponse) instead of an
# arbitrary, shifting `<SomeOtherOp>_200_response` wrapper from inline-schema deduplication.
npm exec -- @openapitools/openapi-generator-cli generate \
    -i "$SPEC_FILE" \
    -g typescript-fetch \
    -o ./src/generated \
    --additional-properties=useSingleRequestParameter=true \
    -c config.json

echo "Generated TypeScript client in ./src/generated"

rm -rvf ./docs/api

npm exec -- @openapitools/openapi-generator-cli generate \
    -i "$SPEC_FILE" \
    -g markdown \
    -o ./docs/api \
    -c config.json

echo "Generated API documentation in ./docs/api"
