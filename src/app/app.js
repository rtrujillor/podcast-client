
angular.module( 'podCast', [
  'templates-app',
  'templates-common',
  'podCast.home',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $sceDelegateProvider ) {
  $urlRouterProvider.otherwise( '/home' );

  $sceDelegateProvider.resourceUrlWhitelist(
    [
     'self',
     'http://podcasts.cnn.net/**'
    ]
   );

})

.run( function run () {
})

.directive('arrowSelector',['$document',function($document){
  return{
      restrict:'A',
      link:function(scope,elem,attrs,ctrl){
          var elemFocus = true;             
          $document.bind('keydown',function(e , $document){
              if(elemFocus){
                  if(e.keyCode === 38){
                      var previousArticleTitle = scope.articles[scope.lastSelectedArticle - 1].title;
                      scope.selectArticle(previousArticleTitle);
                      scope.$apply();
                      e.preventDefault();
                  }
                  if(e.keyCode === 40){
                      var nextArticleTitle = scope.articles[scope.lastSelectedArticle + 1].title;
                      scope.selectArticle(nextArticleTitle);
                      scope.$apply();
                      e.preventDefault();
                  }
                  if(e.keyCode === 13){
                      // Select video tag object and execute play
                      var v = document.getElementsByTagName('video')[0];
                      v.play();
                      scope.$apply();
                      e.preventDefault();
                  }
              }
          });
      }
  };
}
])

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | podCast' ;
    }
  });
});



