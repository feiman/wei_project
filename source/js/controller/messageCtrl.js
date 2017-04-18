app.controller('messageCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (messageLouder) {
				
			    messageLouder.getListinfo().then(function(resp){
			    	$scope.newList = resp.data;
			    });
			    document.title = "任务中心";
			}
		);
	}
]);