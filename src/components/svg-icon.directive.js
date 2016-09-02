export default function svgIcon() {
  return {
    restrict: 'E',
    scope: {},
    replace: true,
    templateUrl: function (el, attrs) {
      return attrs.src;
    }
  }
}
