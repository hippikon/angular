
var app = angular.module("skeep",["ngRoute"]);

	app.config(function($routeProvider){
		$routeProvider
		
		.when("/",{
				templateUrl: "views/page3.html",
				controller: "skeepC2"
			}
		)
		.when("/ping",{
				templateUrl: "views/page2.html",
				controller: "skeepC2"
			}
		)
		.otherwise({
				redirectTo: "/"
			}
		)
		
	});

	app.controller
	("skeepC1",
		["$scope",function($scope)
			{
				$scope.appTitle = "Grocery List";
			}
		]
	);

	app.service
	("dataservice",function()
		{
			var dataserviceobject = {};
			dataserviceobject.items = 
				[
					{id:1,completed:true,itemName:"milk",date:"2016-07-11"},
					{id:2,completed:true,itemName:"bread",date:"2016-07-11"},
					{id:3,completed:true,itemName:"cheese",date:"2016-07-11"},
					{id:4,completed:true,itemName:"oranges",date:"2016-07-10"}
				];
				
			dataserviceobject.save = function(entry)
			{
				dataserviceobject.items.push(entry);
			}		
			return dataserviceobject;	
		}
	);
	
	app.controller
	("skeepC2",
		["$scope","$location","dataservice",function($scope,$location,dataservice)
			{
				$scope.groceryItems = dataservice.items;
				$scope.newItem = {id:5,completed:true,itemName:"new item", date:new Date()};
				$scope.save = function()
				{
					dataservice.save($scope.newItem);
					$location.path("/");
				}
			}
		]
	);
