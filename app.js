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
                return '/partial/assignment.' + $stateParams.id + '.html';
              }
        })

        .state('notfound', {
            url: '/notfound',
            templateUrl: '/partial/notfound.html'
        });
        
});


app.controller('AppCtrl', function ($scope){
	$scope.pageTitle='Valur';

    //Herna baeti eg vid verkefnum af vild.
    $scope.assignments = [
        { name:'project management', id:'week1'},
        { name:'computer-aided design', id:'week2'},
		{ name:'computer-controlled cutting', id:'week3'},
		{ name:'electronics production', id:'week4'},
		{ name:'3D scanning and printing', id:'week5'},
		{ name:'electronics design', id:'week6'},
		{ name:'embedded programming', id:'week7'},
		{ name:'computer-controlled machining', id:'week8'},
		{ name:'molding and casting', id:'week10'},
		{ name:'input devices', id:'week11'},
		{ name:'output devices', id:'week12'},
		{ name:'composites', id:'week13'},
		{ name:'networking and communications', id:'week14'},
		{ name:'mechanical design', id:'week15'},
		{ name:'interface and application programming', id:'week16'},
		{ name:'applications and implications', id:'week17'},
		{ name:'invention, intellectual property, and income', id:'week18'},
		{ name:'project development', id:'week19'}
		{ name:'project presentation', id:'week20'}
    ]
});