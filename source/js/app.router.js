app.config(['$stateProvider', '$urlRouterProvider', '$provide','$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $provide ,$ocLazyLoadProvider) {
        app.constant = $provide.constant;
        $urlRouterProvider.otherwise("/404");
        $stateProvider
        .state('index', {
            url: '/',
            views: {
                '': {
                    templateUrl: 'tpl/index.html',
                    controller: 'indexCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/index.css',
                        'js/controller/indexCtrl.js',
                        'js/service/indexModule.js'
                        ]);
                }]
            }
        })
        .state('chart', {
            url: '/chart',
            views: {
                '': {
                    templateUrl: 'tpl/chart.html',
                    controller: 'chartCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/chart.css',
                        'js/controller/chartCtrl.js',
                        'js/service/chartModule.js'
                        ]);
                }]
            }
        })
        .state('404', {
            url: '/404',
            views: {
                '': {
                    templateUrl: 'tpl/404.html'
                }
            }
        })
    }])
    // .config(['$locationProvider', function ($locationProvider) {

    //     $locationProvider.html5Mode({
    //       enabled: true,
    //       requireBase: false
    //     });
    // }])
;