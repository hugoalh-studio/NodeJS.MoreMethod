const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function toUnderscoreCase
 * @alias toSnakeCase
 * @description Underscore case a string.
 * @param {string} item String that need to underscore case.
 * @returns {string} A underscore cased string.
 */
function toUnderscoreCase(item) {
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument "item" must be type of string (non-nullable)!`);
	};
	let itemArray = item.replace(/[-_]/gu, " ").split(" ");
	let resultObject = {};
	Promise.allSettled(
		itemArray.map((element, index) => {
			new Promise(() => {
				resultObject[index] = element.toLowerCase();
			}).catch();
		})
	);
	return Object.values(resultObject).join("_");
};
module.exports = toUnderscoreCase;
