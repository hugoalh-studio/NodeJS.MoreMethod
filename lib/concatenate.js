/*==================
[NodeJS] More Method - Concatenate
	Language:
		NodeJS/10.0.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @private
 * @function concatenateArray
 * @param {...*[]} items
 * @returns {*[]}
 */
function concatenateArray(...items) {
	return [].concat(...items);
};
/**
 * @private
 * @function concatenateObjectPair
 * @param {...object} items
 * @returns {object}
 */
function concatenateObjectPair(...items) {
	let pool = {};
	Object.assign(pool, ...items);
	return pool;
};
/**
 * @function concatenate
 * @alias concat
 * @alias merge
 * @description Concatenate arrays or object pairs into one.
 * @param {(...*[]|...object)} items Arrays or object pairs that need to concatenate into one.
 * @returns {(*[]|object)} A concatenated array or object pair.
 */
function concatenate(...items) {
	if (items.length === 0) {
		throw new Error(`No input at argument "items"! ([NodeJS] More Method - Concatenate)`);
	};
	if (advancedDetermine.allIs("array", ...items) !== false) {
		return concatenateArray(...items);
	};
	if (advancedDetermine.allIs("objectpair", ...items) !== false) {
		return concatenateObjectPair(...items);
	};
	throw new TypeError(`Argument "items" must be type of arrays or object pairs! ([NodeJS] More Method - Concatenate)`);
};
module.exports = concatenate;
