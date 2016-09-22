(function () {

  angular.module('Electron.controllers')
    .controller('mainController', mainController);

  mainController.$inject = [];

  function mainController () {



  }

})();


var fs = require('fs');
var _  = require('lodash');

var watch = null;

function change_input(event) {
  if (watch) {
    watch.close();
  }
  var path = event.target.files[0].path;
  start_watch(path);
}

function start_watch (path) {
  read_dir(path);
  watch = fs.watch(path, function () {
    read_dir(path);
  });
}

function read_dir (path) {
  fs.readdir(path, function (err, data) {
    var parent_folders = document.getElementById('folders-container');
    while (parent_folders.firstChild) {
      parent_folders.removeChild(parent_folders.firstChild);
    }

    var parent_files = document.getElementById('files-container');
    while (parent_files.firstChild) {
      parent_files.removeChild(parent_files.firstChild);
    }

    var folders = [];
    var files = [];

    for (var i = 0; i < data.length; i++) {
      var check = fs.lstatSync(path + '/' + data[i]).isDirectory();
      if (check) {
        folders.push(data[i]);
      } else {
        files.push(data[i]);
      }
    }

    var compiled_folders = _.template('<p>Folders:</p><% _.forEach(data, function(d) { %><p><%- d %></p><% }); %>');
    var html_folders = compiled_folders({'data': folders});
    parent_folders.insertAdjacentHTML('beforeend', html_folders);

    var compiled_files = _.template('<p>Files:</p><% _.forEach(data, function(d) { %><p><%- d %></p><% }); %>');
    var html_files = compiled_files({'data': files});
    parent_files.insertAdjacentHTML('beforeend', html_files);
  });
}