app.controller('loginCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (loginLouder) {
				$scope.title="北京国际贸易单一窗口";
			}
		);
	}
]);