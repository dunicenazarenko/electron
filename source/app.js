(function () {

  angular.module('Electron', [
    'ngRoute',
    'Electron.controllers',
    'Electron.factories'
  ])
    .run(initFunction);

  initFunction.$inject = ['AuthFactory'];

  function initFunction (AuthFactory) {
    console.log('Run app!');

    AuthFactory.login('RASadmin', '@Password')
      .then(function (data) {
        console.log('data', data);
      })
      .catch(function (err) {
        console.log('err', err);
      })
  }

})();