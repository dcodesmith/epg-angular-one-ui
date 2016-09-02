export default function ordinalSuffix () {

	return function (day) {
			var ddd = day;
			var ordinalSuffixes = ['th', 'st', 'nd', 'rd'];
			var modulo = (day < 30) ? day % 20 : day % 30;
			var ordinalSuffix = (modulo <= 3) ? ordinalSuffixes[modulo] : ordinalSuffixes[0];

			return day += ordinalSuffix;
	};
}
