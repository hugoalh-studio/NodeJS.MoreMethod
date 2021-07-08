const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @private
 * @function concatenateObjectPair
 * @param {object} items
 * @returns {object}
 */
function concatenateObjectPair(...items) {
	let result = {};
	Object.keys(items[0]).forEach((element) => {
		result[element] = items[0][element];
	});
	// TODO
	return result;
};
/**
 * @function concatenate
 * @alias concat
 * @alias merge
 * @description Concatenate arrays or object pairs into one.
 * @param {(*[]|object)} items Arrays or object pairs that need to concatenate into one.
 * @returns {(*[]|object)} A concatenated array or object pair.
 */
function concatenate(...items) {
	if (items.length === 0) {
		throw new Error(`No input(s) at argument "items"!`);
	};
	if (advancedDetermine.allIs("array", ...items) !== false) {
		return [].concat(...items);
	};
	if (advancedDetermine.allIs("object-pair", ...items) !== false) {
		return concatenateObjectPair(...items);
	};
	throw new TypeError(`Argument "items" must be type of arrays or object pairs!`);
};
module.exports = concatenate;
