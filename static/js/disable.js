'use strict';

exports.postAceInit = () => {
  // Function to forcefully hide and disable the import/export button
  const hideImportExportButton = () => {
    const $btn = $('li[data-key="import_export"]');
    if ($btn.length) {
      $btn.css({display: 'none'});
      $btn.find('button, a').prop('disabled', true);
    }
  };

  // Initial attempt (in case the DOM is already there)
  hideImportExportButton();

  // Extra CSS safeguard to ensure the button stays hidden
  $('head').append('<style>li[data-key="import_export"]{display:none!important;pointer-events:none!important;}</style>');
}; 