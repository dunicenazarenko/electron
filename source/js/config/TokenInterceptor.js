(function () {
  angular.module('Electron')
    .factory('TokenInterceptor', TokenInterceptor);

  TokenInterceptor.$inject = ['$q', 'localStorageService'];

  function TokenInterceptor($q, localStorageService) {
    return {
      request: request,
      response: response
    };

    function request(config) {
      config.headers = config.headers || {};

      if (localStorageService.get('token')) {
        if (!RegExp(/AKIAJSYF6ZQGKUZB76KQ/).test(config.url)) {
          config.headers['X-Access-Token'] = localStorageService.get('token');
          config.headers['Content-Type'] = "application/json";
        }
      }

      return config || $q.when(config);
    }

    function response(response) {
      return response || $q.when(response);
    }
  }
})();