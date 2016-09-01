(function() {
  'use strict';

  angular
    .module('app')
    .factory('todoFactory', todoFactory);

  todoFactory.$inject = ['$http', '$q', 'apiUrl'];

  /* @ngInject */
  function todoFactory($http, $q, apiUrl) {
    var service = {
      add: add,
      getAll: getAll,
      getById: getById,
      update: update,
      remove: remove
    };
    return service;

    ////////////////

    function add(todo) {
      var defer = $q.defer();

      $http.post(apiUrl + '/todos', todo)
        .then(
          function(response) {
            defer.resolve(response.data);
          },
          function(error) {
            defer.reject(error);
          }
        );

      return defer.promise;
    }

    function getAll() {
      var defer = $q.defer();

      $http.get(apiUrl + '/todos')
        .then(
          function(response) {
            defer.resolve(response.data);
          },
          function(error) {
            defer.reject(error);
          }
        );

      return defer.promise;
    }

    function getById(id) {
      var defer = $q.defer();

      $http.get(apiUrl + '/todos/' + id)
        .then(
          function(response) {
            defer.resolve(response.data);
          },
          function(error) {
            defer.reject(error);
          }
        );

      return defer.promise;
    }

    function update(todo) {
      var defer = $q.defer();

      $http.put(apiUrl + '/todos/' + todo.todoId, todo)
        .then(
          function() {
            defer.resolve();
          },
          function(error) {
            defer.reject(error);
          }
        );

      return defer.promise;
    }

    function remove(todo) {
      var defer = $q.defer();

      $http.delete(apiUrl + '/todos/' + todo.todoId)
        .then(
          function(response) {
            defer.resolve(response.data);
          },
          function(error) {
            defer.reject(error);
          }
        );

      return defer.promise;
    }
  }
})();
