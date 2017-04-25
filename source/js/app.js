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
    .run(function($location,storageService){
        var search = $location.search();
        if(search.userid != "" ){
            var data = {
                "userid":search.userid
            }
            storageService.setUserInfo(data);
        }
    })
    .factory('sessionInjector', ["storageService",function(storageService) {
        var sessionInjector = {
            request: function(config) {
                var search = storageService.getUserInfo();
                if(search == -1 || search == {}){
                    console.log("参数错误");
                }else{
                    if(config.url.indexOf("tpl") != -1 || config.url.indexOf("css") != -1 || config.url.indexOf("js") != -1){
                    
                    }else{
                       // config.url ="http://192.168.6.78:8080"+config.url; 
                       // config.url ="http://192.168.2.102:8080"+config.url; 
                       config.url ="http://192.168.6.112:9005"+config.url+search.userid; 
                    }
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
;