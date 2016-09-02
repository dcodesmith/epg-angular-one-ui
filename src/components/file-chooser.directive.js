import template from './file-chooser.template';

export default function fileChooser () {
  return {
    restrict: 'E',
    scope: {},
    template: template,
    replace: true,
    link: link
  }

  function link (scope, element, attrs) {
    var $file = element.find('input');
    var $label = element.find('span');
    var labelText = 'No File Choosen'

    scope.fileName = labelText;

    function getFile () {
      return $file[0].files[0];
    }

    function onFileChange (file) {
      var file = getFile();
      var fileName;

      if (!file) {
        fileName = labelText;
      }

      scope.$emit('fileChooser:changed', file);

      scope.$apply(function () {
        scope.fileName = fileName || file.name;
      });
    }

    $file.on('change', onFileChange);

    scope.$on('$destroy', function () {
      $file.off('change');
    });
  }
}
