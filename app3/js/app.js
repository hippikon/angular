
var app = angular.module("skeep",["ngRoute"]);

	app.config(function($routeProvider){
		$routeProvider
		
		.when("/",{
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
				$scope.appTitle = "Tax Form";
			}
		]
	);

	app.service
	("dataservice",function()
		{
			var dataserviceobject = {};
			dataserviceobject.items = 
				[
					{id:1,firstName:"Madhuri", lastName:"Ramachandran", wages:1000.00,interest:100.00,paid:300.00,refund:0.00,owed:0.00},
					{id:2,firstName:"Sri Vamshi Mohan", lastName:"Darbha", wages:1000.00,interest:100.00,paid:300.00,refund:0.00,owed:0.00}

				];
			dataserviceobject.counter = 3;
			
			dataserviceobject.save = function(entry)
			{
				entry.id = dataserviceobject.getNewId();
				var tax = .1*(entry.wages+entry.interest);
				console.log(tax);
				if (tax < entry.paid)
				{
					entry.refund = entry.paid - tax;	
					entry.owed = 0;
				}
				else
				{
					entry.refund = 0;
					entry.owed = tax - entry.paid;
				}
				
				dataserviceobject.items.push(entry);
			}		
			
			dataserviceobject.getNewId = function()
			{
				return dataserviceobject.counter++;
			}
			
			return dataserviceobject;	
		}
	);
	
	app.controller
	("skeepC2",
		["$scope","$location","dataservice",function($scope,$location,dataservice)
			{
				$scope.groceryItems = dataservice.items;
				$scope.newItem = {id:3,firstName:"Abc", lastName:"123", wages:1000.00,interest:100.00,paid:300.00,refund:0.00,owed:0.00};
				$scope.calculate = function()
				{
					dataservice.save($scope.newItem);
				}
				console.log(angular.element(document.body).injector().get('dataservice'));
			}
		]
	);
