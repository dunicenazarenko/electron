(function() {

  angular.module('Electron.controllers')
    .controller('loginController', loginController)
    .directive('fileChange', fileChange);

  loginController.$inject = [
    '$scope',
    '$rootScope'
  ];

  function loginController($scope, $rootScope) {
    console.log('loginController');

    $scope.upload = function () {
      // do something with the file
      console.log($scope.file);
    };

    var vm = this;

    vm.updateImage = '(' + function () {
      alert('moo');
    }.toString() + ')();';

    vm.input_text = null;

    vm.change_input = function () {
      console.log('vm.input_text', vm.input_text);
    }

  }

  function fileChange() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        fileChange: '&'
      },
      link: function link(scope, element, attrs, ctrl) {
        element.on('change', onChange);

        scope.$on('destroy', function () {
          element.off('change', onChange);
        });

        function onChange() {
          ctrl.$setViewValue(element[0].files[0]);
          scope.fileChange();
        }
      }
    };
  }

})();