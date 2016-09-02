import template from './schedule-item.template';
import moment from 'moment';

export default function scheduleItem() {
	return {
		restrict: 'E',
		scope: {
			item: '='
		},
		template: template,
		replace: true,
		link: link
	}

	function link(scope, element, attrs) {
		var ONE_MILLISECOND = 60 * 1000;
		var TRACK_WIDTH = 75;

		scope.offset = 0;

		function setItemStyle() {
			var item = scope.item;
			var startTime = moment(item.startTime, 'HH:mm')
			var endTime = moment(item.endTime, 'HH:mm')
			var duration = endTime.diff(startTime) / ONE_MILLISECOND;

			scope.itemStyle = { width: `${(duration * TRACK_WIDTH) / 30}px` };
		}

		setItemStyle();
	}
}
