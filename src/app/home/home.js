/**
 * Each section of the site has its own module. 
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'podCast.home', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes.
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope,  podCastService , $sce ) {

    $scope.metas = {};
    $scope.articles = [];
    $scope.lastSelectedArticle = null;
    $scope.video = {};
    $scope.podcastUrl = "http://rss.cnn.com/services/podcasting/ac360/rss.xml";
    $scope.showVideoPlayer = false;
    /**
     * Event handler for getting podcast Feeds , when user click "Load"
     * @param  {[string]} url [podCast URL to get feeds from]
     * @return {[type]}     [description]
     */
    $scope.getFeeds = function (url){
      if(typeof url !== "undefined") {

        podCastService.getFeeds(url, function(err,data){
              if(err){
                  throw(err);
              } else {
                $scope.metas = data.meta;
                $scope.articles = data.articles;
                $scope.articles[0].active = 'active';
                $scope.showVideoPlayer = true;
                $scope.lastSelectedArticle = 0;
                $scope.video.url = $sce.trustAsResourceUrl($scope.articles[0].guid);

              }
          });
      }
    };

    /**
     * Function executed when an article from the list has been selected
     * @param  {[type]} title [Titel of the selected article]
     * @return {[type]}       [description]
     */
    $scope.selectArticle = function(title){
        for(var i = 0, len = $scope.articles.length; i < len; i++) {
            if ($scope.articles[i].title === title) {
              $scope.articles[$scope.lastSelectedArticle].active=null;
              $scope.articles[i].active='active';
              $scope.lastSelectedArticle = i;
              $scope.video.url = $sce.trustAsResourceUrl($scope.articles[i].guid);
              $scope.video.description = $scope.articles[i].description;
              break;
            }
        }
    };

})

/**
 * And a service to get the podcasts
 * @param  {[type]} $http){                         return {    };} [description]
 * @return {[type]}          [description]
 */
.factory('podCastService' , function($http){

    // Service public functions

    return {
      getFeeds : function(podcastUrl , callback){

            var request = {
                method : 'GET',
                url : 'http://localhost:3030/parseFeed?url='+podcastUrl
            };

            console.log("Getting feeds from : " + podcastUrl);

            $http(request).
                success(function(data, status, headers, config) {
                    callback(null,data);
                }).
                error(function(data, status, headers, config) {
                    var err = "Error getting podcast feeds : " + JSON.stringify(data);
                    callback(err,null);
                });
      }

    };



});

