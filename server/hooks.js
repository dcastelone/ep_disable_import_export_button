'use strict';

/**
 * This hook could be used to block import/export related messages if needed.
 * Currently, hiding the UI button is sufficient, but this can be extended
 * to block any programmatic attempts to trigger import/export.
 */
exports.handleMessage = async (hookName, context) => {
  // Currently no server-side message blocking needed for import/export
  // The UI prevention is sufficient
  return undefined;
}; 