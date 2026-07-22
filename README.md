# ep_disable_import_export_buttons

Disables browser import and export in Etherpad. The plugin removes the user-facing controls and rejects direct browser requests at the server boundary.

## Protection provided

- Loads static CSS early to prevent the Import/Export control from flashing during startup.
- Disables the corresponding client interactions.
- Rejects `POST /p/:pad/import`.
- Rejects current and revision-specific `/export/:type` requests.
- Logs rejected requests for operational review.
- Leaves authenticated Etherpad HTTP API methods available for trusted server-to-server workflows.

The server-side `preAuthorize` hook is the enforcement layer. Toolbar configuration alone is not a security boundary.

## Installation

From the Etherpad directory:

```sh
pnpm run plugins i ep_disable_import_export_buttons
```

Restart Etherpad after installation. No configuration is required.

## Operational notes

This plugin applies to every pad on the Etherpad instance. Review installed plugins for any additional import or export routes because only Etherpad's standard pad paths are covered.

## Development

```sh
pnpm install --frozen-lockfile
pnpm test
pnpm lint
```

Licensed under the Apache License 2.0.
