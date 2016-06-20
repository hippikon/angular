
var app = angular.module("skeep",["ngRoute","skeepM1","skeepService"]);

	app.config(function($routeProvider){
		$routeProvider
		
		.when("/",{
				templateUrl: "views/page1.html",
				controller: "skeepC1"
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
		
	})

	var sser = angular.module("skeepService",[]);
	
	app.service("Calculator", function () 
	{
		this.square = function (a) { return a*a;}

	});
	
	app.controller
	("ssrc",function($scope, Calculator)
			{
				$scope.test = 2;
				$scope.doSquare = function(){$scope.test = Calculator.square($scope.test);}
			}
	);
	
