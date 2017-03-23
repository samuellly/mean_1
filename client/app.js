var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController',
    })
    .when('/wall', {
        templateUrl: 'partials/wall.html',
        controller: 'wallController', 
    })
    .otherwise({
        redirectTo: '/wall',
    });
});
