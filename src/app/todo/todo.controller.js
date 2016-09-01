(function() {
  'use strict';

  angular
    .module('app')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['todoFactory'];

  /* @ngInject */
  function TodoController(todoFactory) {
    var vm = this;

    // properties
    vm.todos = [];
    vm.blankTodo = {};

    // methods
    vm.addTodo = addTodo;
    vm.removeTodo = removeTodo;
    vm.updateTodo = updateTodo;

    getAllTodos();

    ////////////////

    function addTodo() {
      todoFactory.add(vm.blankTodo).then(
        function(newTodo) {
          vm.todos.push(newTodo);
          vm.blankTodo = {};
        }
      );
    }

    function removeTodo(todo) {
      if (confirm("Are you sure you want to remove this todo item?")) {
        todoFactory.remove(todo).then(
          function() {
            var index = vm.todos.indexOf(todo);
            vm.todos.splice(index, 1);
          }
        );
      }
    }

    function updateTodo(todo) {
      todoFactory.update(todo).then(
        function() {
          todo.edit = false;  
        }
      );
    }

    function getAllTodos() {
      todoFactory.getAll().then(
        function(todos) {
          vm.todos = todos;
        }
      );
    }

  }
})();
