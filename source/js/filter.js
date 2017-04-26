app.filter('tips', function(){
		return function(obj){
			if(obj.length > 20){
				obj = obj.slice(0,20)+"...";
			}
			
			return obj;
		};
	});