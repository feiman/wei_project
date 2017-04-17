app.controller('searchCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (searchLouder) {
				$scope.title="北京国际贸易单一窗口";
			}
		);
	}
]);