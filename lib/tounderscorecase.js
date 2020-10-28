/*==================
[NodeJS] More Method - To Underscore Case
	Language:
		NodeJS/10.13.0
==================*/
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
		throw new TypeError(`Argument "item" must be type of string (non-nullable)! ([NodeJS] More Method - To Underscore Case)`);
	};
	item = item.replace(/[-_]/gu, " ").replace(/([A-Z])/gu, " $1");
	let itemArray = item.split(" ");
	if (Promise.allSettled) {
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
	let resultArray = [];
	itemArray.forEach((element) => {
		resultArray.push(element.toLowerCase());
	});
	return resultArray.join("_");
};
module.exports = toUnderscoreCase;
