'use strict';
var testApp = angular.module('testApp', ['ui.router']);


// --------- for routing between pages
testApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './index.html'
        })
        .state('products', {
            url: '/products',
            templateUrl: './products.html'
        })
        .state('detail', {
            url: '^/detail/:id',
            views: {
                '@': {
                    templateUrl: './pages/product-detail.html',
                    controller: 'detailController'
                }
            }
        });
});

// --------- for view product-detail.html
testApp.controller('detailController', function($scope, $http, $stateParams) {
$scope.toys = [];
$http.get('./js/toys-list.json')
    .then(
        function(res) {
            $scope.toys = res.data.toys;
            $scope.toy = $scope.toys.filter(function(elem){ return elem.id == $stateParams.id;})[0];
        },
        function (err) {
            console.log(err);
        });
});
