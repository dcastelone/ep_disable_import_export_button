# ep_disable_import_export_buttons

Disable and hide the **Import/Export** buttons from the Etherpad toolbar so that users cannot import or export pads via the UI.

## Features

* Hides the import/export toolbar button with CSS and disables it with JavaScript.
* Targets the `li[data-key="import_export"]` toolbar element.

## Installation

From the Etherpad root directory run:

```bash
cd etherpad-lite
pnpm run plugins i ep_disable_import_export_buttons
```

Or install via the **/admin/plugins** page.

After installing, restart Etherpad.

## Configuration

No configuration is necessary – once installed the import/export buttons are disabled for all pads.

## Development

* Client-side code lives in `static/js/disable.js`.
* Server-side hook placeholder is in `server/hooks.js` (currently not actively blocking messages).

## License

Apache 2.0 – see `LICENSE.md`. 