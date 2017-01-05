(function() {
	'use strict';

	angular.module('MenuApp')
	.component('categories', {
		templateUrl: 'tmplt/categories-list.template.html',
		bindings: {
			items: '<'
		}
	});

})();