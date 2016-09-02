export default function svgUrl ($sce) {

	return function(itemCode) {
		console.log('itemCode', itemCode);
		return $sce.trustAsUrl('/images/' + itemCode + '.svg');
	};
}
