app.factory('taskDetailLouder',['$http','$location','transformRequest',function($http,$location,transformRequest){
  return {
        'getTaskinfo':function(data){

          var search = $location.search();
          
          
          var url = '/MobileApi/api/TaskInfo';

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