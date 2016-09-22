(function () {

  angular.module('Electron.factories')
    .factory('AuthFactory', AuthFactory);

  AuthFactory.$inject = ['$http', 'DEV_url'];

  function AuthFactory($http, DEV_url) {
    return {
      login: login
    };

    function login(username, password) {
      //TODO replace url with config variable
      return $http.post(DEV_url.api + '/login', {
        username: username,
        password: password
      });
    }
  }

})();
