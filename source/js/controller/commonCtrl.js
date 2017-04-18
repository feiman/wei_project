app.controller('commonCtrl',['$scope','$injector','$stateProvider',
	function($scope,$injector,$stateProvider){
		$injector.invoke(
			function () {
				$scope.activeFootBar = function(){
					console.log($stateProvider.state.url());
					
				}
				
			}
		);
	}
]);