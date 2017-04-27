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
        'getSearchInfo':function(data,bool){

          if(bool){
            var url = '/MobileApi/api/Project/GetProjectsBySubjectOrPartyBName';
          }else{
            var url = '/MobileApi/api/Project/GetProjectsByProjectTypeAndStage';
          }
          

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