var myApp=angular.module('myApp',[]);

myApp.controller('MainController',['$scope','$log','$location',function($scope,$log,$location){
	$scope.name='nihaoit';
	$log.info($location.path());
}]);
//console.log('this is a test!');

