app.factory('messageLouder',['$http','transformRequest','$location',function($http,transformRequest,$location){
  return {
        'getListinfo':function(){

          var search = $location.search();
          
          var url = '/MobileApi/api/Notices';

          return $http.get(url+"?"+transformRequest(search)).then(

              function(resp){

                return resp;

              },
              function(resp){

                return resp;

              });
        }
      };
  }]);