'use strict';

// Register CSS file to load statically (prevents flash on page load)
exports.eejsBlock_styles = (hookName, args, cb) => {
  args.content += '<link href="../static/plugins/ep_disable_import_export_buttons/static/css/disable.css" rel="stylesheet">';
  return cb();
};

exports.postAceInit = () => {
  // Additional JavaScript-based disabling for extra safety
  const hideImportExportButton = () => {
    const $btn = $('li[data-key="import_export"]');
    if ($btn.length) {
      $btn.find('button, a').prop('disabled', true);
    }
  };

  // Disable any interactive elements in the button
  hideImportExportButton();
}; 