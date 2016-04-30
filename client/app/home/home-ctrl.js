/**
 * Created by Rahul on 4/18/2016.
 */

myapp.controller('homeController',['$scope','$mdSidenav',function($scope,$mdSidenav){
  $scope.openLeftMenu = function(){
    $mdSidenav('left').toggle();
  };



}])
