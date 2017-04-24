app.factory('indexLouder',function($http){
  return {
        'getListinfo':function(){

          var url = '/MobileApi/api/MyTask/';

          return $http.get(url).then(

              function(resp){

                return resp;

              },
              function(resp){

                return resp;

              });
        }
      };
  });