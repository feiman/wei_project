app.controller('indexCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (indexLouder) {
				
			    indexLouder.getListinfo().then(function(resp){
			    	$scope.newList = resp.data;
			    });

			    $scope.indexInfo = {
			    	"panel_1":true,
			    	"panel_2":false,
			    	"panel_3":false,
			    	"switch":function(id){
			    		$scope.indexInfo.panel_1 = false;
			    		$scope.indexInfo.panel_2 = false;
			    		$scope.indexInfo.panel_3 = false;
			    		$scope.indexInfo["panel_"+id] = true;
			    	}
			    };
			    document.title = "任务中心";
			}
		);
	}
]);