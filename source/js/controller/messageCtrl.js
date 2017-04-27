app.controller('messageCtrl',['$scope','$injector','paramService','$location',
	function($scope,$injector){
		$injector.invoke(
			function (messageLouder,paramService,$location) {

				$scope.userid = $location.search();

			    messageLouder.getListinfo().then(function(resp){
			    	$scope.messageList = resp.data;
			    });

			    $scope.getDetail = true;
			    $scope.showDetail = function(data){
			    	
			    	paramService.setResult(data);
			    	window.location.href="#!/messageDetail?userid="+$scope.userid.userid;
			    	
			    }
			    document.title = "消息";
			}
		);
	}
]);