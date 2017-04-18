app.config(['$stateProvider', '$urlRouterProvider', '$provide','$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $provide ,$ocLazyLoadProvider) {
        app.constant = $provide.constant;
        $urlRouterProvider.otherwise("/task");
        $stateProvider
        .state('task', {
            url: '/task',
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
        .state('taskDetail', {
            url: '/taskDetail',
            views: {
                '': {
                    templateUrl: 'tpl/taskDetail.html',
                    controller: 'taskDetailCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controller/taskDetailCtrl.js',
                        'js/service/taskDetailModule.js'
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
        .state('message', {
            url: '/message',
            views: {
                '': {
                    templateUrl: 'tpl/message.html',
                    controller: 'messageCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/message.css',
                        'js/controller/messageCtrl.js',
                        'js/service/messageModule.js'
                        ]);
                }]
            }
        })
        .state('suggest', {
            url: '/suggest',
            views: {
                '': {
                    templateUrl: 'tpl/suggest.html',
                    controller: 'suggestCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/suggest.css',
                        'js/controller/suggestCtrl.js',
                        'js/service/suggestModule.js'
                        ]);
                }]
            }
        })
        ;
        
    }])
    // .config(['$locationProvider', function ($locationProvider) {

    //     $locationProvider.html5Mode({
    //       enabled: true,
    //       requireBase: false
    //     });
    // }])
;