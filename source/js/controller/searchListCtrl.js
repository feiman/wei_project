app.controller('searchListCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (searchListLouder) {
				$scope.title="查询列表";
			}
		);
	}
]);