app.controller('newsDetailCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (newsDetailLouder) {
				$scope.title="信息服务";
			}
		);
	}
]);