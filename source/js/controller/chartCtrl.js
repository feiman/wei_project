app.controller('chartCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (chartLouder) {
				
			    chartLouder.getListinfo().then(function(resp){
			    	$scope.newList = resp.data;
			    });
			    document.title = "统计图表";

			    $scope.projectStatistics = {
			    	"startDate"	:"请选择起始时间",
			    	"endDate"	:"请选择截止时间",
			    	"panel_1":true,
			    	"panel_2":false,
			    	"panel_3":false,
			    	"panel_4":false,
			    	"switch":function(id){
			    		$scope.projectStatistics.panel_1 = false;
			    		$scope.projectStatistics.panel_2 = false;
			    		$scope.projectStatistics.panel_3 = false;
			    		$scope.projectStatistics.panel_4 = false;
			    		$scope.projectStatistics["panel_"+id] = true;
			    	}
			    };
			    $scope.datePicker = function(){
			    	weui.datePicker({
						start: new Date(), // 从今天开始
						end: 2030,
						cron: '1-10 * *',  // 每月1日-10日
						onChange: function(result){
						 console.log(result);
						},
						onConfirm: function(result){
						 console.log(result);
						}
					});
			    }
			    
			    weui.searchBar('#searchBar');
			    
			}
		);
	}
]);