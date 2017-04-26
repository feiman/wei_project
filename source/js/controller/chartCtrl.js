app.controller('chartCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (chartLouder) {
				
			    chartLouder.getListinfo().then(function(resp){
			    	$scope.newList = resp.data;
			    });
			    document.title = "统计图表";
			    $scope.options = [{
			    	id:"",
			    	year:"请选择起始时间"
			    }];
			    var start = 1980;
			    for(var i = 0 ; i < 41; i++ ){
			    	var temp = {
			    		'id':start,
			    		'year':start
			    	}
			    	$scope.options.push(temp);
			    	start ++;
			    }
			    $scope.tableInfo = [];
			    $scope.searchTabel = function(){
			    	var data = {
			    		"beginYearStr":$scope.projectStatistics.startDate,
			    		"endYearStr":$scope.projectStatistics.endDate,
			    	};
			    	chartLouder.getTableInfo(data).then(function(resp){
			    		$scope.tableInfo = resp.data;
			    	});
			    }
			    $scope.projectStatistics = {
			    	"startDate"	:new Date().getFullYear(),
			    	"endDate"	:new Date().getFullYear(),
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
			    
			    $scope.chart = {
			    	"title":"常规",
			    	"chart1":true,
			    	"chart2":false,
			    	"switchChart":function(id){
			    		$scope.chart.chart1 = false;
			    		$scope.chart.chart2 = false;
			    		$scope.chart["chart"+id] = true;
			    		if(id == 1){
			    			$scope.chart.title = "常规";
			    		}else{
			    			$scope.chart.title = "金关";
			    		}
			    	}
			    };
			    weui.searchBar('#searchBar');
			    
			}
		);
	}
]);