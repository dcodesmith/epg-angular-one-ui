import template from './date-selector.template';
import _ from 'lodash';

export default function dateSelector () {
  return {
    restrict: 'E',
    scope: {
      programmeDates: '='
    },
    template: template,
    replace: true,
    link: link
  }

  function link (scope, element, attrs) {
    var ITEM_WIDTH = 150;

    scope.itemWidth = ITEM_WIDTH;
    scope.currentIndex = 0;
    scope.selectedDate = scope.programmeDates[0];

    scope.$watch('selectedDate', function (newSelectedDate, oldSelectedDate) {
      scope.$emit('dateSelector:changed', newSelectedDate);
    });

    scope.onSelect = function (index) {
      var selectedDate;

      scope.currentIndex = index;
      selectedDate = scope.programmeDates[index];
      scope.selectedDate = selectedDate;
      // scope.$emit('dateSelector:changed', selectedDate);
    }

  }
}
