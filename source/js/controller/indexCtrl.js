app.controller('indexCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (indexLouder) {
				
			    indexLouder.getListinfo().then(function(resp){
			    	$scope.newList = resp.data;
			    });
			    document.title = "任务中心";
			}
		);
	}
]);