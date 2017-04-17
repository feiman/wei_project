app.factory('loginLouder',function($http){
  return {
        'getListinfo':function(){

          var url = '/data/index_list_info.json';

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