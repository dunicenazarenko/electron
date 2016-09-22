(function () {
  angular.module('Electron.factories')
    .factory('DocumentFactory', DocumentFactory);

  DocumentFactory.$inject = ['$http', 'DEV_url'];

  function DocumentFactory($http, DEV_url) {

    var document_url = {
      get: {
        clientFolderTree: DEV_url.api + '/api/v1/dm/folderstreebyorg/' + '',
        myFolderTree    : DEV_url.api + '/api/v1/dm/folderstree'
      }
    };

    return {
      clientFolderTree: clientFolderTree,
      myFolderTree    : myFolderTree
    };

    function clientFolderTree(params) {
      return $http.get(document_url.get.clientFolderTree + params);
    }

    function myFolderTree() {
      return $http.get(document_url.get.myFolderTree);
    }
  }
})();
