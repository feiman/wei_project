app.controller('commonCtrl',['$scope','$injector','$location',
	function($scope,$injector,$location){
		$injector.invoke(
			function () {
				
				$scope.activeFootBar = (function(){
					var path  = $location.path();
					$scope.state = {
						"footBar_1":false,
						"footBar_2":false,
						"footBar_3":false,
						"footBar_4":false
					};
					if(path == "/suggest"){
						$scope.state.footBar_4 = true;
					}else if(path == "/task" || path == "/taskDetail" ){
						$scope.state.footBar_1 = true;
					}else if(path == "/chart"){
						$scope.state.footBar_2 = true;
					}else if(path == "/message"){
						$scope.state.footBar_3 = true;
					}
				})();
			}
		);
	}
])
;