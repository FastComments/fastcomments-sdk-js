#!/bin/bash

# Remove previously generated code
rm -rvf ./src/generated

# Try to download the OpenAPI spec from the running FastComments server
if wget -q http://localhost:3001/js/swagger.json -O /tmp/fastcomments-openapi.json; then
    echo "Downloaded OpenAPI spec from running server"
    SPEC_FILE="/tmp/fastcomments-openapi.json"
else
    echo "Server not running, using local OpenAPI spec"
    SPEC_FILE="./openapi.yaml"
fi

# Generate the TypeScript client
npx @openapitools/openapi-generator-cli generate \
    -i "$SPEC_FILE" \
    -g typescript-axios \
    -o ./src/generated \
    --additional-properties=useSingleRequestParameter=true \
    -c config.json

echo "Generated TypeScript client in ./src/generated"