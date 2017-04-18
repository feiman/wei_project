app.controller('suggestCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (suggestLouder) {
				
			    suggestLouder.getListinfo().then(function(resp){
			    	$scope.newList = resp.data;
			    });
			    document.title = "反馈与意见";
			}
		);
	}
]);