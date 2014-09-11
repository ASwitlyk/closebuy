angular.module('forSale.services', [])

.factory('ItemsForSale',  function($q) { 

	var instance = {};

	instance.getMyForSaleItems = function() {
		// use a promise to return items
		var deferred = $q.defer();
		var items = [];

		// new parse query on Items table
		var query = new Parse.Query('Items');

		// query.select("userId", "imgURL", "price", "description", "objectID", "location");

		query.equalTo("userId", Parse.User.current().id);

		query.find().then(function(results) {
			results.forEach(function(result) {
				items.push(result);
			});
			deferred.resolve(items);
		});
		return deferred.promise;
	}

	return instance;


});
