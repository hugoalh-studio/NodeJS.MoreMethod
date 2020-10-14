/*==================
[NodeJS] More Method - Ensure Suffix
	Language:
		NodeJS/10.0.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function ensureSuffix
 * @description Ensure a string ends with suffix.
 * @param {string} item String that need to check.
 * @param {string} suffix Suffix.
 * @returns {string} A suffixed string.
 */
function ensureSuffix(item, suffix) {
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument "item" must be type of string (non-nullable)! ([NodeJS] More Method - Ensure Suffix)`);
	};
	if (advancedDetermine.isString(suffix) !== true) {
		throw new TypeError(`Argument "suffix" must be type of string (non-nullable)! ([NodeJS] More Method - Ensure Suffix)`);
	};
	let position = item.length - suffix.length;
	return (
		(item.indexOf(suffix, position) === position) ? item : `${item}${suffix}`
	);
};
module.exports = ensureSuffix;
