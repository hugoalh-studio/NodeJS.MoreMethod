/*==================
[NodeJS] More Method - To Capital Case
	Language:
		NodeJS/14.15.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function toCapitalCase
 * @description Capital case a string.
 * @param {string} item String that need to capital case.
 * @returns {string} A capital cased string.
 */
function toCapitalCase(item) {
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument "item" must be type of string (non-nullable)! ([NodeJS] More Method - To Capital Case)`);
	};
	item = item.replace(/[-_]/gu, " ").replace(/([A-Z])/gu, " $1");
	let itemArray = item.split(" ");
	let resultObject = {};
	Promise.allSettled(
		itemArray.map((element, index) => {
			new Promise(() => {
				resultObject[index] = `${element.charAt(0).toUpperCase()}${element.slice(1).toLowerCase()}`;
			}).catch();
		})
	);
	return Object.values(resultObject).join(" ");
};
module.exports = toCapitalCase;
