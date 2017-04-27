app.factory('suggestLouder',['$http','$location','transformRequest',function($http,$location,transformRequest){
  return {
        'submitSuggest':function(data){

          var search = $location.search();
          search.Content = data;

          var url = '/MobileApi/api/TaskInfo';

          return $http.post(url+"?"+transformRequest(search)).then(

              function(resp){

                return resp;

              },
              function(resp){

                return resp;

              });
        }
      };
  }]);