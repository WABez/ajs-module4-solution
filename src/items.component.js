(function() {
	'use strict';

	angular.module('MenuApp')
	.component('itemsList', {
		templateUrl: 'tmplt/item-detail.template.html',
		bindings: {
			items: '<'
		}
	});

})();