app.controller('taskDetailCtrl',['$scope','$injector','$location',
	function($scope,$injector){
		$injector.invoke(
			function (taskDetailLouder,$location) {
				var id = $location.search();
				if(id.taskid == "" || !id.taskid){
					window.location.href="#!/task?userid="+id.userid
				}
			    taskDetailLouder.getTaskinfo(id).then(function(resp){
			    	$scope.taskInfo = resp.data[0];
			    });
			    $scope.addSuggest = function(data){
			    	window.location.href="#!/suggest?userid="+id.userid+"&taskid="+id.taskid;
			    }
			    document.title = "任务详情";
			}
		);
	}
]);