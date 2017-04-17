app.controller('commonCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function () {
				$scope.gotopanel = function(id){
					window.location.href = "#!"+id;
				}
			}
		);
	}
]);