'use strict';

/**
 * Register CSS file to load statically (prevents flash on page load)
 */
exports.eejsBlock_styles = (hookName, args, cb) => {
  args.content += '<link href="../static/plugins/ep_disable_import_export_buttons/static/css/disable.css" rel="stylesheet">';
  return cb();
};

/**
 * Block all import/export requests at the server level.
 * This prevents users from bypassing the hidden UI button by making direct HTTP requests.
 */
exports.preAuthorize = async (hookName, {req}) => {
  const path = req.path;
  
  // Block all import requests (POST /p/:pad/import)
  if (path.match(/\/p\/[^/]+\/import$/)) {
    console.warn(`[ep_disable_import_export_buttons] Blocked import request to ${path} from ${req.ip}`);
    return [false];
  }
  
  // Block all export requests (GET /p/:pad/export/:type or /p/:pad/:rev/export/:type)
  if (path.match(/\/p\/[^/]+(\/\d+)?\/export\/[^/]+$/)) {
    console.warn(`[ep_disable_import_export_buttons] Blocked export request to ${path} from ${req.ip}`);
    return [false];
  }
  
  // Allow all other requests to proceed normally
  return [];
}; 