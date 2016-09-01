(function() {
    'use strict';

    angular
        .module('app', ['toastr'])
        .value('apiUrl', 'http://localhost:58408/api');
})();