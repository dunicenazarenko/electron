(function () {
  angular.module('Electron')
    .config(configFoo);

  configFoo.$inject = ['localStorageServiceProvider', '$httpProvider'];

  function configFoo (localStorageServiceProvider, $httpProvider) {
    localStorageServiceProvider
      .setPrefix('Workspaces')
      .setStorageType('sessionStorage')
      .setNotify(false, false);

    $httpProvider.interceptors.push('TokenInterceptor');
  }
})();