(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Purchases',
        icon: 'purchases',
        sref: '.dashboard'
      },
      {
        name: 'Overpriced',
        icon: 'overpriced',
        sref: '.overpriced'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
