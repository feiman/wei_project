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
						start: 1990,
					    end: 2000,
					    defaultValue: [1991, 6, 9],
					    onChange: function(result){
					        console.log(result);
					    },
					    onConfirm: function(result){
					        console.log(result);
					    },
					    id: 'datePicker'
					});
			    }
			    
			    weui.searchBar('#searchBar');
			    
			}
		);
	}
]);