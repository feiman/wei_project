app.controller('messageDetailCtrl',['$scope','$injector','paramService',
	function($scope,$injector){
		$injector.invoke(
			function (paramService) {


		    	$scope.messageDetail = paramService.getResult();

		    	if(angular.isArray($scope.messageDetail)){
		    		window.location.href="#!/message";
		    	}

		    	console.log($scope.messageDetail);

			    document.title = "消息详情";

			}
		);
	}
]);