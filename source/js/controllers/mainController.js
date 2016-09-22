(function () {
  angular.module('Electron.controllers')
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$rootScope', 'localStorageService', 'AuthFactory', 'DocumentFactory'];

  function mainController($scope, $rootScope, localStorageService, AuthFactory, DocumentFactory) {
    var vm = this;

    //login info
    vm.login_state = false;
    vm.login_username = 'f12345';
    vm.login_password = '@Password';

    //variable
    vm.clientFoldersTree = [];

    //function
    vm.login = login;
    vm.clickOnFolder = clickOnFolder;


    function login() {
      if (!vm.login_username || !vm.login_password) return;

      var login_data = {
        username: vm.login_username,
        password: vm.login_password
      };

      AuthFactory.login(login_data)
        .then(function (request) {
          if (request.data && request.data.token) {
            localStorageService.set('user', request.data);
            localStorageService.set('token', request.data.token);
            vm.login_state = true;
            get_folders_data(request.data.org_id);
          }
        })
        .catch(function (err) {
          console.log('err', err);
        });
    }

    function get_folders_data(org_id) {
      DocumentFactory.myFolderTree()
        .then(function (request) {
          vm.clientFoldersTree = request.data.folders_tree;
        })
        .catch(function (err) {
          console.log('err', err);
        });
    }

    function clickOnFolder(folderId) {
    }
  }
})();