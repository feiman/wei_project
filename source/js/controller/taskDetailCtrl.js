app.controller('taskDetailCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (taskDetailLouder) {
				
			    taskDetailLouder.getListinfo().then(function(resp){
			    	$scope.newList = resp.data;
			    });
			    document.title = "任务详情";
			}
		);
	}
]);