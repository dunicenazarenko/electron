(function () {
  angular.module('Electron.factories')
    .factory('DocumentFactory', DocumentFactory);

  DocumentFactory.$inject = ['$http', 'DEV_url'];

  function DocumentFactory($http, DEV_url) {

    var document_url = {
      get: {
        myFolderContent: DEV_url.api + '/api/v1/dm/filesbyfolderid/' + '',
        myFolderTree   : DEV_url.api + '/api/v1/dm/folderstree'
      }
    };

    return {
      myFolderContent: myFolderContent,
      myFolderTree   : myFolderTree
    };

    function myFolderContent(params) {
      return $http.get(document_url.get.myFolderContent + params);
    }
    function myFolderTree() {
      return $http.get(document_url.get.myFolderTree);
    }
  }
})();
