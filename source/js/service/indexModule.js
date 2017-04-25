app.factory('indexLouder',function($http){
  return {
        'getListinfo':function(task){

          var url = "";
          if(task == "task" || task == "" || !task){

            url = '/MobileApi/api/MyTask/';

          }else if(task == "todo"){

            url = '/MobileApi/api/MyToDo/';

          }else if(task == "done"){

            url = '/MobileApi/api/MyDone/';

          }
          

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