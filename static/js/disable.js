'use strict';

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