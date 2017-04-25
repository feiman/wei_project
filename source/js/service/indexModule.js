app.factory('indexLouder',['transformRequest','$http','$location',function(transformRequest,$http,$location){
  return {
        'getListinfo':function(task){

          var url = "";

          var search = $location.search();

          if(task == "task" || task == "" || !task){

            url = '/MobileApi/api/MyTask/';

          }else if(task == "todo"){

            url = '/MobileApi/api/MyToDo/';

          }else if(task == "done"){

            url = '/MobileApi/api/MyDone/';

          }
          

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