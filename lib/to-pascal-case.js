const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function toPascalCase
 * @alias toUpperCamelCase
 * @description Pascal case a string.
 * @param {string} item String that need to pascal case.
 * @returns {string} A pascal cased string.
 */
function toPascalCase(item) {
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument "item" must be type of string (non-nullable)!`);
	};
	let itemArray = item.replace(/[-_]/gu, " ").split(" ");
	let resultObject = {};
	Promise.allSettled(
		itemArray.map((element, index) => {
			new Promise(() => {
				resultObject[index] = `${element.charAt(0).toUpperCase()}${element.slice(1).toLowerCase()}`;
			}).catch();
		})
	);
	return Object.values(resultObject).join("");
};
module.exports = toPascalCase;
