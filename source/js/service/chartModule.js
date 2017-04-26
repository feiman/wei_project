app.factory('chartLouder',['$http','transformRequest',function($http,transformRequest){
  return {
        'getChartInfo':function(data){

          var url = '/MobileApi/api/NewCharts/GetProjectCountStatistical';


          return $http.get(url+"?"+transformRequest(data)).then(

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
        },
        'getSearchInfo':function(data){

          var url = '/MobileApi/api/Project/GetProjectsBySubjectOrPartyBName';

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