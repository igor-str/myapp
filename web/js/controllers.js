angular.module('testApp').controller('toysController', function ($scope, $http){
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