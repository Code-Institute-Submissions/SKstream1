// directive for placing the player and video on our page and allowing user interaction
angular.module('bandApp', []);
app.directive('mediaPlayer', function(audioService) {
  return {
        restrict: 'E',
        scope: {},
        templateUrl: '/templates/music.html',
        link: function (scope, element, attrs) {
          scope.myAudioService = audioservice;
      }
    };
});
