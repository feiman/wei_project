app.controller('indexCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (indexLouder) {
				
			    indexLouder.getListinfo("task").then(function(resp){
			    	$scope.myTask = resp.data;
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
			    		if(id == 1){
			    			indexLouder.getListinfo("task").then(function(resp){
						    	$scope.myTask = resp.data;
						    });
			    		}else if(id == 2){
			    			indexLouder.getListinfo("todo").then(function(resp){
						    	$scope.myToDo = resp.data;
						    });
			    		}else if(id == 3){
			    			indexLouder.getListinfo("done").then(function(resp){
						    	$scope.myDone = resp.data;
						    });
			    		}
			    	}
			    };
			    document.title = "任务中心";
			}
		);
	}
]);