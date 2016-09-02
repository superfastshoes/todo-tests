describe('todoFactory', function(){
	
	beforeEach(function(){
		bard.appModule('app');
		bard.inject('todoFactory', 'apiUrl', '$httpBackend');
	});

/**************************************************************************************/

	describe('when getAll is called', function(){
		it('should return data on success', function(){

			var response = {
				data: [{}]	
			};

			$httpBackend.whenGET(apiUrl + '/todos').respond(response);

			todoFactory.getAll().then(
				function(data){
					expect(data.length).toEqual(1);
				},
				function(error) {
					expect(1).toEqual(2);
				}
			);
		});

		it('should return an error on fail', function() {
			$httpBackend.whenGET(apiUrl + '/todos').respond(500);

			todoFactory.getAll().then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
	});

/**************************************************************************************/

	describe('when add is called', function(){
		it('should add data on success', function(){
		
		var response = {
				data: [{},{}]	
			};
		var todo = {};

		$httpBackend.whenPOST(apiUrl + '/todos', todo).respond(response);

		todoFactory.add().then(
				function(data){
					expect(data.length).toEqual(2);
				},
				function(error) {
					expect(2).toEqual(1);
				}
			);
		});
		it('should return an error on fail', function() {
			$httpBackend.whenPOST(apiUrl + '/todos', todo).respond(500);
		
		var todo = {};

			todoFactory.add().then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
	});

/**************************************************************************************/

	describe('when getById is called', function(){
		it('should return specific data on success', function(){

			var response = {
				data: [{}]	
			};

			var id = {};

			$httpBackend.whenGET(apiUrl + '/todos', id).respond(response);

			todoFactory.getById().then(
				function(data){
					expect(data.length).toEqual(1);
				},
				function(error) {
					expect(1).toEqual(2);
				}
			);
		});

		it('should return an error on fail', function() {
			
			var id = {};

			$httpBackend.whenGET(apiUrl + '/todos', id).respond(500);

			todoFactory.getById().then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
	});
	
/**************************************************************************************/

	describe('when update is called', function(){
		it('should return updated data on success', function(){

			var response = {
				data: [{}]
			};

			var todo = {};

			$httpBackend.whenPUT(apiUrl + '/todos', todo.todoId, todo).respond(response);

			todoFactory.update(todo).then(
				function(){
					expect(data.update).toEqual(todo);
				},
				function(error) {
					expect(2).toEqual(1);
				}
			);
		});
		it('should return an error on fail', function() {
			
			var todo = {};

			$httpBackend.whenPUT(apiUrl + '/todos', todo.todoId, todo).respond(500);

			todoFactory.update(todo).then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined(); 
				}
			);
		});

	});

/**************************************************************************************/

	describe('when is called', function (){
		it('should delete the selected data', function(){
			
			var response = {
				data: [{},{}]
			};

			var todo = {};

			$httpBackend.whenDELETE(apiUrl + '/todos', todo.todoId).respond(response);

			todoFactory.remove(todo).then(
				function(data) {
					expect(2).toBe(1);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
		it('should return an error on fail', function() {
			
			var todo = {};

			$httpBackend.whenDELETE(apiUrl + '/todos', todo.todoId).respond(500);

			todoFactory.remove(todo).then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
	});
	





});