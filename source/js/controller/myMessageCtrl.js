app.controller('myMessageCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (myMessageLouder) {
				$scope.title="测试messageheader";
			}
		);
	}
]);