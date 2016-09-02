import template from './programme-guide.template';

export default function programmeGuide() {
  return {
    restrict: 'E',
    scope: {
      programmes: '=',
      channels: '='
    },
    template: template,
    replace: true,
    link: link
  }

  function link(scope, element, attrs) {
    var TRACK_LENGTH = 12;

    scope.HOUR_WIDTH = 150;
    scope.offset = 0;
    scope.times = _.range(0, 24, .5);
    scope.lastOffset = Math.floor(scope.times.length - TRACK_LENGTH) / 2;

    // scope.$watch('programmes', function(newProgrammes, oldProgammes) {
    //   scope.channels = _.filter(newProgrammes, 'channels');
    // });

    scope.navigate = function (direction) {
      var offset = scope.offset;

      offset += direction;
      scope.offset = offset;

      setTransformStyle();
    }

    function setTransformStyle() {
      var abscissa = (-scope.offset * scope.HOUR_WIDTH) + 'px';
      scope.transformStyle = {
        'transform': 'translate3d(' + abscissa + ', 0, 0)',
        '-webkit-transform': 'translate3d(' + abscissa + ', 0, 0)'
      };
    }

    setTransformStyle();
  }
}
