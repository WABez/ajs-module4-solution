(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('ItemDetailController', ItemDetailController);


	ItemDetailController.$inject = ['$stateParams', 'items'];
	function ItemDetailController($stateParams, items) {
		var ctgryDetail = this;

		ctgryDetail.menuItems = items.data.menu_items;
		ctgryDetail.name = items.data.category.name;
	};

})();