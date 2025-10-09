# ep_disable_import_export_buttons

Disable and hide the **Import/Export** buttons from the Etherpad toolbar and block import/export requests at the server level.

## Features

* Client-side UI hiding with static CSS (no flash on page load)
* Server-side request blocking via `preAuthorize` hook
* Logs blocked attempts with IP addresses for security monitoring
* HTTP API access remains available for server-to-server operations

## Installation

From the Etherpad root directory run:

```bash
cd etherpad-lite
pnpm run plugins i ep_disable_import_export_buttons
```

Or install via the **/admin/plugins** page.

After installing, restart Etherpad.

## How It Works

This plugin provides three layers of protection:

1. **Static CSS** - Hides the UI button immediately on page load (no flash)
2. **Client-side JavaScript** - Disables button interactions
3. **Server-side `preAuthorize` hook** - Blocks HTTP requests to import/export endpoints

All import/export operations are blocked for regular users. The HTTP API remains functional if accessed with valid API credentials.

## Comparison with Settings-Based Approaches

**Toolbar Configuration** (e.g., `settings.json` toolbar customization):
- Only hides the UI button
- Users can still access `/p/:pad/import` or `/p/:pad/export/:type` directly via browser console or HTTP clients
- Suitable when you trust your users and just want to simplify the interface

**Rate Limiting** (`importExportRateLimiting` in `settings.json`):
- Throttles the number of requests per IP address
- Does not disable the functionality, only limits frequency
- Suitable for preventing abuse while keeping the feature available

**This Plugin**:
- Completely blocks import/export for browser users
- Appropriate when you need to enforce the restriction regardless of client behavior
- HTTP API access with credentials is unaffected

## Configuration

No configuration is necessary – once installed, import/export is disabled for all pads accessed via the web UI.

## Development

* Static CSS in `static/css/disable.css` hides the button immediately on page load.
* Client-side JavaScript in `static/js/disable.js` registers the CSS and disables button interactions.
* Server-side `preAuthorize` hook in `server/hooks.js` blocks all import/export HTTP requests.
  * Blocks `POST /p/:pad/import`
  * Blocks `GET /p/:pad/export/:type` and `GET /p/:pad/:rev/export/:type`
  * Logs blocked attempts with IP address for security monitoring.

## License

Apache 2.0 – see `LICENSE.md`. 