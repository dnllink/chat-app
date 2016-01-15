angular.module('chat', ['ngRoute', 'ngResource', 'ngCookies']).config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    });

    $routeProvider.when('/chat', {
        templateUrl: 'partials/chat.html',
        controller: 'messagesController'
    });

    $routeProvider.otherwise({
        redirectTo: '/login'
    });

});