'use strict';
// ----------- for getting data from JSON-file "toys-list.json" in index.html
angular.module('testApp').controller('toysCtrl', function ($scope, $http){
    $scope.toysList = [];
    $http.get('./js/toys-list.json')
        .then(
            function(res) {
                $scope.toysList = res.data.toys;
            },
            function (err) {
                console.log(err);
            })
    ;
});
