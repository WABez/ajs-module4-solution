(function() {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);


	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		
		// Default (or redirect) to home page if no other URL matches
		$urlRouterProvider.otherwise('/');

		// === Set up UI states ===
		$stateProvider
		.state('home', {		// Home page template
			url: '/',
			templateUrl: 'tmplt/home.template.html'
		})

		.state('categoriesList', {		// Categories List template
			url: '/categories-list',
			templateUrl: 'tmplt/main-categories-list.template.html',
			controller: 'CategoriesController as categoriesList',
			resolve: {
				items: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		})

		.state('categoriesList.menuItems', {		// Items Detail template
			url: '/menu-items/{catShortName}',
			templateUrl: 'tmplt/items.template.html',
			controller: 'ItemDetailController as itemDetail',
			resolve: {
				items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.catShortName);
				}]
			}			
		})
	}

})();