app.controller('indexCtrl',['$scope','$injector',
	function($scope,$injector){
		$injector.invoke(
			function (indexLouder) {
				var swiper = new Swiper('.swiper-container', {
			        pagination: '.swiper-pagination',
			        paginationClickable: true,
			        autoplayDisableOnInteraction:false,
			        loop:true,
					    autoplay:2000
			    });
			    indexLouder.getListinfo().then(function(resp){
			    	$scope.newList = resp.data;
			    });
			}
		);
	}
]);