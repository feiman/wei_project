app.controller('messageCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (messageLouder) {
				
			    messageLouder.getListinfo().then(function(resp){
			    	$scope.messageList = resp.data;
			    });
			    document.title = "消息";
			}
		);
	}
]);