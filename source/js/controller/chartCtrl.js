app.controller('chartCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (chartLouder) {
				
			    indexLouder.getListinfo().then(function(resp){
			    	$scope.newList = resp.data;
			    });
			    document.title = "统计图表";
			}
		);
	}
]);