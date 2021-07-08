const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function toConstantCase
 * @description Constant case a string.
 * @param {string} item String that need to constant case.
 * @returns {string} A constant cased string.
 */
function toConstantCase(item) {
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument "item" must be type of string (non-nullable)!`);
	};
	let itemArray = item.replace(/[-_]/gu, " ").split(" ");
	let resultObject = {};
	Promise.allSettled(
		itemArray.map((element, index) => {
			new Promise(() => {
				resultObject[index] = element.toUpperCase();
			}).catch();
		})
	);
	return Object.values(resultObject).join("_");
};
module.exports = toConstantCase;
