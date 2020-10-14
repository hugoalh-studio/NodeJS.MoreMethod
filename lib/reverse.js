/*==================
[NodeJS] More Method - Reverse
	Language:
		NodeJS/10.0.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @private
 * @function reverseArray
 * @param {*[]} item
 * @returns {*[]}
 */
function reverseArray(item) {
	if (item.length <= 1) {
		return item;
	};
	if (Promise.allSettled) {
		let resultObject = {};
		Promise.allSettled(
			item.map((element, index) => {
				new Promise(() => {
					resultObject[(item.length - 1) - index] = element;
				}).catch();
			})
		);
		return Object.values(resultObject);
	};
	let resultArray = [];
	for (let index = item.length - 1; index >= 0; index--) {
		resultArray.push(item[index]);
	};
	return resultArray;
};
/**
 * @private
 * @function reverseString
 * @param {string} item
 * @returns {string}
 */
function reverseString(item) {
	if (item.length <= 1) {
		return item;
	};
	let itemArray = item.split("");
	if (Promise.allSettled) {
		let resultObject = {};
		Promise.allSettled(
			itemArray.map((character, index) => {
				new Promise(() => {
					resultObject[(itemArray.length - 1) - index] = character;
				}).catch();
			})
		);
		return Object.values(resultObject).join("");
	};
	let resultArray = [];
	for (let index = itemArray.length - 1; index >= 0; index--) {
		resultArray.push(itemArray[index]);
	};
	return resultArray.join("");
}
/**
 * @function reverse
 * @description Reverse an array or a string.
 * @param {(*[]|string)} item Array or string that need to reverse.
 * @returns {(*[]|string)} A reversed array or string.
 */
function reverse(item) {
	if (advancedDetermine.isArray(item) !== false) {
		return reverseArray(item);
	};
	if (advancedDetermine.isString(item) !== false) {
		return reverseString(item);
	};
	throw new TypeError(`Argument "item" must be type of array or string! ([NodeJS] More Method - Reverse)`);
};
module.exports = reverse;
