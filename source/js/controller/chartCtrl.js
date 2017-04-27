app.controller('chartCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (chartLouder) {
				
			    
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
			    $scope.loadChart = function(chart){
			    	chartLouder.getChartInfo({
				    	"projectTypeStr":chart
				    }).then(function(resp){
				    	if(resp.data.Success){
				    		var dataContainer = {
				    			x:[],
				    			xValue:[]
				    		};
				    		for(var i = 0; i < resp.data.Result.length; i++){
				    			dataContainer.x.push(resp.data.Result[i].StageName);
				    			dataContainer.xValue.push(resp.data.Result[i].ProjectCount);
				    		}
				    		var myChart = echarts.init(document.getElementById('main'));

					        var option = {
					            title: {
					                text: '项目进度'
					            },
					            tooltip: {},
					            legend: {
					                data:['销量']
					            },
					            xAxis: {
					                axisLabel: {
									    interval:0,
									  	formatter:function(val){
									     return val.split("").join("\n"); 
										}
									},
									data: dataContainer.x
					            },
					            yAxis: {
					            	
					            },
							    grid: {
							        containLabel: true
							    },
					            series: [{
					                name: '销量',
					                type: 'bar',
					                data: dataContainer.xValue
					            }]
					        };
					        
					        myChart.setOption(option);
				    	}else{
				    		$scope.chartTisp = "图表数据加载失败，请稍后再试";
				    	}
				    });
			    }
			    $scope.loadChart("FundsPhase");
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
			    			$scope.loadChart("FundsPhase");
			    		}else{
			    			$scope.chart.title = "金关";
			    			$scope.loadChart("GoldenPhase");
			    		}
			    	}
			    };
			    $scope.searchDataPage = {
			    	"pageNum":1,
			    	"pageSize":10
			    }
			    $scope.loadMore = true;
			    $scope.loading = false;
			    $scope.searchInfo = [];

			    $scope.loadSearch = function(bool,times){
			    	if(times){
			    		$scope.searchDataPage.pageNum = 1;
			    	}
			    	$scope.searchData = {};
			    	if(bool){
			    		$scope.searchData.pageNum = $scope.searchDataPage.pageNum;
			    		$scope.searchData.pageSize = $scope.searchDataPage.pageSize;
			    		$scope.searchData.inputStr = $scope.searchStr;
						console.log(1);
			    	}else{
			    		$scope.searchData.pageNum = $scope.searchDataPage.pageNum;
			    		$scope.searchData.pageSize = $scope.searchDataPage.pageSize;
			    		$scope.searchData.projectType = "";
			    		$scope.searchData.projectStage = "";
			    		console.log(2);
			    	}
			    	chartLouder.getSearchInfo($scope.searchData,bool).then(function(resp){
			    		if(bool){
			    			$scope.searchInfo = {};
			    			$scope.searchInfo = resp.data;
			    		}else{
			    			var temp = [];
				    		angular.copy($scope.searchInfo,temp);
				    		$scope.searchInfo = temp.concat(resp.data);
			    		}
			    		
			    		$scope.loading = false;
			    		for(var i = 0; i < $scope.searchInfo.lenght; i++){
			    			$scope.searchInfo.animate = false;
			    		}
			    		if(resp.data.length < 10){
			    			$scope.loadMore = false;
			    		}
			    	});
			    }

			    $scope.loadSearch(false);
			    $scope.toggleAnimate = function(index){
			    	$scope.searchInfo[index].animate = !$scope.searchInfo[index].animate;
			    }
		        
			    $scope.loadData = function(){
			    	$scope.loading = true;
			    	$scope.searchDataPage.pageNum += 1;
			    	var state = ($scope.searchStr || $scope.searchStr == "")?true:false;
			    	$scope.loadSearch(state);
			    }

			    weui.searchBar('#searchBar');
			    
			}
		);
	}
]);