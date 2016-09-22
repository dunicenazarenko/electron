(function () {
  angular.module('Electron.factories')
    .factory('AuthFactory', AuthFactory);

  AuthFactory.$inject = ['$http', 'DEV_url'];

  function AuthFactory($http, DEV_url) {
    var auth_url = {
      post: {
        login: DEV_url.api + '/login'
      }
    };

    return {
      login: login
    };

    function login(params) {
      return $http.post(auth_url.post.login, params);
    }
  }
})();