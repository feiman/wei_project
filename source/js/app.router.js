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
        .state('newsDetail', {
            url: '/newsDetail',
            views: {
                '': {
                    templateUrl: 'tpl/newsDetail.html',
                    controller: 'newsDetailCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/newsDetail.css',
                        'js/controller/newsDetailCtrl.js',
                        'js/service/newsDetailModule.js'
                        ]);
                }]
            }
        })
        .state('search', {
            url: '/search',
            views: {
                '': {
                    templateUrl: 'tpl/search.html',
                    controller: 'searchCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/search.css',
                        'js/controller/searchCtrl.js',
                        'js/service/searchModule.js'
                        ]);
                }]
            }
        })
        .state('searchList', {
            url: '/searchList',
            views: {
                '': {
                    templateUrl: 'tpl/searchList.html',
                    controller: 'searchListCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/newsDetail.css',
                        'css/searchList.css',
                        'js/controller/searchListCtrl.js',
                        'js/service/searchListModule.js'
                        ]);
                }]
            }
        })
        .state('login', {
            url: '/login',
            views: {
                '': {
                    templateUrl: 'tpl/login.html',
                    controller: 'loginCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/login.css',
                        'js/controller/loginCtrl.js',
                        'js/service/loginModule.js'
                        ]);
                }]
            }
        })
        .state('myMessage', {
            url: '/myMessage',
            views: {
                '': {
                    templateUrl: 'tpl/myMessage.html',
                    controller: 'myMessageCtrl'
                }
            },
            resolve: { 
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/myMessage.css',
                        'js/controller/myMessageCtrl.js',
                        'js/service/myMessageModule.js'
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