var app = angular.module('app', ['ui.bootstrap', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.when('', '/');

    $urlRouterProvider.otherwise('/notfound')

    $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: '/partial/home.html'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: '/partial/about.html'
        })

        .state('assignment', {
            url: '/assignment/:id',
            templateUrl: function ($stateParams){
                return '/partial/assignment' + $stateParams.id + '.html';
              }
        })

        .state('notfound', {
            url: '/notfound',
            templateUrl: '/partial/notfound.html'
        });
        
});


app.controller('AppCtrl', function ($scope){
	$scope.pageTitle='Valur';

    //Hérna bætiru við verkefnum eins og þú vilt.
    $scope.assignments = [
        { name:'Fyrsta Verkefnið', id:'1'},
        { name:'Hvaða nafn sem er', id:'2'}
    ]
});