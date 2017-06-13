'use strict';
testApp.directive('productDetailView', function () {
   return {
       replace: true, //from hide <product-detail-view> in DOM
       template: '<h1>Directive</h1>'
   };
});
