var app = angular.module('app', ['ui.bootstrap', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/notfound');
    
    $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'partial/home.html'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: 'partial/about.html'
        })

        .state('assignment', {
            abstract: true,
            url: '/assignment'
        })

        .state('assignment.details', {
            url: '/number/:number'
        })

        .state('notfound', {
            url: '/notfound',
            templateUrl: 'partial/notfound.html'
        });
        
});


app.controller('AppCtrl', function ($scope){
	$scope.pageTitle='Valur';
})

