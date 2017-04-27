app.controller('suggestCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (suggestLouder) {
				
			    $scope.confrim = function(){
			    	suggestLouder.submitSuggest($scope.suggest).then(function(resp){
			    		
			    		if(resp.status == 200){
			    			history.go(-1);
			    		}else{
			    			alert("保存失败");
			    		}
			    	});
			    }
			    document.title = "反馈与意见";
			}
		);
	}
]);