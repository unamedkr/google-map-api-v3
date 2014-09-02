(function(){

  'use strict';

  angular
    .module('googleMapApiV3App')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  };

})();