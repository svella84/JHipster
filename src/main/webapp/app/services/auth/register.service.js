(function () {
    'use strict';

    angular
        .module('jHipsterHerokuApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
