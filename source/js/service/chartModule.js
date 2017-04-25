app.factory('chartLouder',['$http','transformRequest',function($http,transformRequest){
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
        },
        'getTableInfo':function(data){

          var url = '/MobileApi/api/NewCharts/GetProposalCountStatistical';

          return $http.get(url+"?"+transformRequest(data)).then(

              function(resp){

                return resp;

              },
              function(resp){

                return resp;

              });
        }
      };
  }]);