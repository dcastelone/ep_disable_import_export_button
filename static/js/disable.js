'use strict';

exports.postAceInit = () => {
  // Mirror the proven pattern from ep_disable_delete_button
  const hideImportExportButton = () => {
    const $btn = $('li[data-key="import_export"]');
    if ($btn.length) {
      $btn.prop('disabled', true);
      $btn.css({display: 'none'});
    }
  };

  // Initial attempt (in case the DOM is already there)
  hideImportExportButton();

  // Extra CSS safeguard to ensure the button stays hidden
  $('head').append(
      '<style>li[data-key="import_export"]' +
      '{display:none!important;pointer-events:none!important;}</style>');
};
