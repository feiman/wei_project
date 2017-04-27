var app = angular.module('app', ['oc.lazyLoad','ui.router','angular-loading-bar']);


app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
            // lazy controller, directive and service
            app.controller = $controllerProvider.register;
            app.directive  = $compileProvider.directive;
            app.filter     = $filterProvider.register;
            app.factory    = $provide.factory;
            app.service    = $provide.service;
            app.constant   = $provide.constant;
            app.value      = $provide.value;
        }
    ])
    .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug : true
            //loadedModules: ['app'],
            //jsLoader: requirejs,
            //debug: true,
            //events: true
        });
    }])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = false;
    }])
    .factory('transformRequest',function(){
        return function (obj) {

            var str = [];

            for(var p in obj){

                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));

            }

            return str.join("&");

        };
    })
    .factory('sessionInjector', [function() {
        var sessionInjector = {
            request: function(config) {
                
                if(config.url.indexOf("tpl") != -1 || config.url.indexOf("css") != -1 || config.url.indexOf("js") != -1){
                
                }else{
                   // config.url ="http://192.168.6.78:8080"+config.url; 
                   // config.url ="http://192.168.2.102:8080"+config.url; 
                   config.url ="http://192.168.6.112:9005"+config.url; 
                }
                
                return config;
            },
            response: function(response) {
                if(response.status != 200){
                    console.log("http请求失败");
                    response.data = {};
                }else{
                    console.log("http请求成功");
                    
                }
                return response;
            }
        };
        return sessionInjector;
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('sessionInjector');
    }])
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
          element.bind("keydown keypress", function (event) {
              if (event.which === 13) {
                  scope.$apply(function () {
                      scope.$eval(attrs.ngEnter);
                  });
                  event.preventDefault();
              }
          });
        };
    })
;