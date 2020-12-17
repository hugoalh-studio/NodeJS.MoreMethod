/*==================
[NodeJS] More Method - To Dromedary Case
	Language:
		NodeJS/14.15.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function toDromedaryCase
 * @alias toCamelCase
 * @alias toLowerCamelCase
 * @description Dromedary case a string.
 * @param {string} item String that need to dromedary case.
 * @returns {string} A dromedary cased string.
 */
function toDromedaryCase(item) {
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument "item" must be type of string (non-nullable)! ([NodeJS] More Method - To Dromedary Case)`);
	};
	item = item.replace(/[-_]/gu, " ").replace(/([A-Z])/gu, " $1");
	let itemArray = item.split(" ");
	if (Promise.allSettled) {
		let resultObject = {};
		Promise.allSettled(
			itemArray.map((element, index) => {
				new Promise(() => {
					resultObject[index] = (index === 0) ? element.toLowerCase() : `${element.charAt(0).toUpperCase()}${element.slice(1).toLowerCase()}`;
				}).catch();
			})
		);
		return Object.values(resultObject).join("");
	};
	let resultArray = [];
	itemArray.forEach((element, index) => {
		resultArray.push((index === 0) ? element.toLowerCase() : `${element.charAt(0).toUpperCase()}${element.slice(1).toLowerCase()}`);
	});
	return resultArray.join("");
};
module.exports = toDromedaryCase;
