(function(){

  'use strict';

  angular
    .module('googleMapApiV3App')
    .controller('AdminCtrl', AdminCtrl);

  /* @ngInject */
  function AdminCtrl($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  };

})();