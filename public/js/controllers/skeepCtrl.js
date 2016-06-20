
var sctrl = angular.module("skeepM1",[]);

	sctrl.controller
	("skeepC1",
		["$scope",function($scope)
			{
				$scope.name = "Wasa";
				$scope.person = {};
				$scope.person.name = "Madhuri";
				$scope.person.size = "XL";
				$scope.person.style = "floral";
				$scope.person.rabbit = 2;
				
				$scope.doJiggy = function() {
					$scope.person.rabbit *= 2;
				}
			}
		]
	);
//sctrl.service();
	sctrl.directive
	(
		"stagline", function() {
			return {
				restrict: "EA",
				template: "<b>Why did the cross the road</b>"		
			}
		}
	);
	

var sctrl2 = angular.module("skeepM2",[]);
	