docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate --global-property models \
    -i https://raw.githubusercontent.com/kubernetes/kubernetes/release-1.31/api/openapi-spec/swagger.json \
    -g typescript \
    -o /local/.gen