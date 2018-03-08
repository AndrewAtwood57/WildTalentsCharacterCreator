
var app = angular.module('WTCharacterCreator', [
    'ngRoute',
    'ngAnimate', 
    'ngCookies',
    'ui.bootstrap'
]);

//app.run(['$rootScope', '$location', '$cookies', '$http', function($rootScope, $location, $cookies, $http) {
//    // keep user logged in after page refresh
//    $rootScope.globals = $cookies.getObject('globals') || {};
//    if ($rootScope.globals.currentUser) {
//        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
//    }

//    $rootScope.$on('$locationChangeStart', function (event, next, current) {
//        // redirect to login page if not logged in and trying to access a restricted page
//        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
//        var loggedIn = $rootScope.globals.currentUser;
//        if (restrictedPage && !loggedIn) {
//            $location.path('/login');
//        }
//    });
//}]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/CharacterCreator.html", controller: "HomeController"})
    // Pages
    .when("/login", {templateUrl: "partials/login.html", controller: "PageCtrl"})
    .when("/register", {templateUrl: "partials/register.html", controller: "PageCtrl"})
    .when("/character", {templateUrl: "partials/CharcterCreator.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

