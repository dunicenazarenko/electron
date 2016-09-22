(function () {
  angular.module('Electron', [
    'LocalStorageModule',
    'ngRoute',
    'Electron.controllers',
    'Electron.factories'
  ])
    .run(initFunction);

  initFunction.$inject = [];

  function initFunction() {

  }
})();