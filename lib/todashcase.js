/*==================
[NodeJS] More Method - To Dash Case
	Language:
		NodeJS/14.15.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function toDashCase
 * @description Dash case a string.
 * @param {string} item String that need to dash case.
 * @returns {string} A dash cased string.
 */
function toDashCase(item) {
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument "item" must be type of string (non-nullable)! ([NodeJS] More Method - To Dash Case)`);
	};
	item = item.replace(/[-_]/gu, " ").replace(/([A-Z])/gu, " $1");
	let itemArray = item.split(" ");
	let resultObject = {};
	Promise.allSettled(
		itemArray.map((element, index) => {
			new Promise(() => {
				resultObject[index] = element.toLowerCase();
			}).catch();
		})
	);
	return Object.values(resultObject).join("-");
};
};
module.exports = toDashCase;
