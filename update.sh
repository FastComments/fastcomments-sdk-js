#!/bin/bash

npm i

# Remove previously generated code
rm -rvf ./src/generated

# Try to download the OpenAPI spec from the running FastComments server
if wget -q http://localhost:3001/js/swagger.json -O ./openapi.json; then
    echo "Downloaded OpenAPI spec from running server"
    SPEC_FILE="./openapi.json"
else
    echo "Server not running, using local OpenAPI spec"
    SPEC_FILE="./openapi.yaml"
fi

# Generate the TypeScript client
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
