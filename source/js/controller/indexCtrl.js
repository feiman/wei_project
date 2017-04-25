app.controller('indexCtrl',['$scope','$injector','$location',
	function($scope,$injector){
		$injector.invoke(
			function (indexLouder,$location) {
				
				$scope.userid = $location.search();

				if($scope.userid == "" || !$scope.userid){
					alert("参数错误");
				}else{
					
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

				    $scope.toDetail = function(data){
				    	window.location.href = "#!/taskDetail?userid="+$scope.userid.userid+"&taskid="+data.TaskID;
				    }
				    document.title = "任务中心";
				}
			    
			}
		);
	}
]);