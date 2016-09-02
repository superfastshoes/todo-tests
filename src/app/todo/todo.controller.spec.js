describe('TodoController', function(){

	var todoController;

	beforeEach(function(){
		bard.appModule('app');
		bard.inject('$controller', '$q', '$rootScope', 'todoFactory');
	});

	beforeEach(function() {
		sinon.stub(todoFactory, 'getAll').returns($q.when([{},{},{}]));
		sinon.stub(todoFactory, 'add').returns($q.when({}));
		sinon.stub(todoFactory, 'remove').returns($q.when());

		todoController = $controller('TodoController');

		$rootScope.$apply(); 
	});

	//bard.verifyNoOutstandingHttpRequests();

/**************************************************************************************/

	describe('controller', function() {

		//Check if the controller is working
		it('should be created sussfully', function(){
			expect(todoController).toBeDefined();
		});
/**************************************************************************************/
		
		//Check if the getTodos function is working
		describe('after getTodos is called', function() {
			it('should have 3 todos in the array', function(){
				expect(todoController.todos.length).toEqual(3);
			});	
		});

/**************************************************************************************/

		//Check if the addTodo function is working
		describe('after adding a todo', function(){
			it('should add 1 to the array', function(){
				todoController.blankTodo.name = 'fake todo';
				todoController.blankTodo.priority = 1;
				todoController.addTodo();

				$rootScope.$apply();

				expect(todoController.todos.length).toEqual(4);
				//expect(todoController.blankTodo == {});
			});
		});

/**************************************************************************************/

		describe('after deleting a todo and user confirms deletion', function() {
			
			it('should have 2 todos in the array', sinon.test(function(){
				this.stub(window, 'confirm').returns(true);

				todoController.removeTodo({}); 

				$rootScope.$apply();

				expect(todoController.todos.length).toEqual(2);
			}));
		});

/**************************************************************************************/

		describe('after deleting a todo and user cancels deletion', function() {
			it('should have 2 todos in the array', sinon.test(function(){
				this.stub(window, 'confirm').returns(false);

				todoController.removeTodo({}); 

				$rootScope.$apply();

				expect(todoController.todos.length).toEqual(3);
			}));
		});



	});


});















