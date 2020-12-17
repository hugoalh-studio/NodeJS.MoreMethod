/*==================
[NodeJS] More Method - To Pascal Case
	Language:
		NodeJS/14.15.0
==================*/
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
		throw new TypeError(`Argument "item" must be type of string (non-nullable)! ([NodeJS] More Method - To Pascal Case)`);
	};
	item = item.replace(/[-_]/gu, " ").replace(/([A-Z])/gu, " $1");
	let itemArray = item.split(" ");
	if (Promise.allSettled) {
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
	let resultArray = [];
	itemArray.forEach((element) => {
		resultArray.push(`${element.charAt(0).toUpperCase()}${element.slice(1).toLowerCase()}`);
	});
	return resultArray.join("");
};
module.exports = toPascalCase;
