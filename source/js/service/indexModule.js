app.factory('indexLouder',function($http){
  return {
        'getListinfo':function(){

          var url = 'res/data/getAllNews.json';

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