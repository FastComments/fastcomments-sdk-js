# FastComments Node.js/TypeScript SDK - Development Guide

This guide is for maintainers and contributors to the FastComments SDK.

## Development Setup

### Prerequisites

- Node.js 16+
- npm
- Running FastComments server (optional, falls back to local spec)

### Setup

```bash
npm install
```

## Code Generation

The SDK uses OpenAPI Generator to create the client from the FastComments API specification:

```bash
npm run generate
```

This will:
1. Try to download the OpenAPI spec from `http://localhost:3001/js/swagger.json`
2. Fall back to using the local `openapi.yaml` file if server is not running
3. Generate TypeScript client code in `src/generated/`

## Building

```bash
npm run build
```

This runs the full build pipeline:
1. Generates the API client (`npm run generate`)
2. Compiles TypeScript to JavaScript (`npm run compile`)

## Code Quality

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## Publishing

### Prerequisites

- Ensure you're logged into npm: `npm login`
- Bump version in `package.json`
- Update `CHANGELOG.md` (if applicable)

### Publish to npm

```bash
npm run publish:npm
```

This script will:
1. Build the SDK
2. Run pre-publish checks
3. Publish to npm with public access

### Manual Publishing

```bash
npm run build
npm publish --access public
```

## Project Structure

```
fastcomments-sdk-js/
├── src/
│   ├── index.ts              # Main SDK entry point
│   └── generated/            # Auto-generated API client (gitignored)
├── dist/                     # Compiled output (gitignored)
├── scripts/
│   ├── update.sh            # Generation script
│   └── publish.sh           # Publishing script
├── config.json              # OpenAPI generator config
├── openapitools.json        # OpenAPI generator CLI config
├── openapi.yaml             # Local fallback OpenAPI spec
├── tsconfig.json            # TypeScript configuration
├── package.json             # Node.js package config
└── README.md                # Public documentation
```

## Updating the OpenAPI Specification

1. **From Running Server** (preferred):
   - Ensure FastComments server is running on `localhost:3001`
   - Run `npm run generate`

2. **Update Local Fallback**:
   - Copy the latest `openapi.yaml` from the Java SDK
   - Run `npm run generate`

## Release Process

1. Update version in `package.json`
2. Run `npm run build` to ensure everything compiles
3. Test the SDK in a sample project
4. Commit changes
5. Tag the release: `git tag v0.0.X`
6. Push tags: `git push --tags`
7. Publish: `npm run publish:npm`

## Troubleshooting

### Generation Issues

- **Server not running**: The script automatically falls back to `openapi.yaml`
- **TypeScript errors**: Ensure `src/generated/` exists and has been populated
- **Missing dependencies**: Run `npm install`

### Build Issues

- **Cannot find generated modules**: Run `npm run generate` first
- **TypeScript compilation errors**: Check `tsconfig.json` and generated files

### Publishing Issues

- **Not logged in**: Run `npm login`
- **Version conflicts**: Update version in `package.json`
- **Permission denied**: Ensure you have publish rights to the `@fastcomments` org