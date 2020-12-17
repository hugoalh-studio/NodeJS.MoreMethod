/*==================
[NodeJS] More Method - Remove Duplicate
	Language:
		NodeJS/14.15.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function removeDuplicate
 * @alias uniq
 * @alias unique
 * @description Remove all of the duplicated elements in the array.
 * @param {*[]} item Array that need to remove duplicated elements.
 * @returns {*[]} An array with unique elements.
 */
function removeDuplicate(item) {
	if (advancedDetermine.isArray(item) === false) {
		throw new TypeError(`Argument "item" must be type of array! ([NodeJS] More Method - Remove Duplicate)`);
	};
	let result = [];
	item.forEach((elementItem) => {
		let duplicated = false;
		for (let index = 0; index < result.length; index++) {
			let elementResult = result[index];
			if (advancedDetermine.areEqual(elementItem, elementResult) === true) {
				duplicated = true;
				break;
			};
		};
		if (duplicated === false) {
			result.push(elementItem);
		};
	});
	return result;
};
module.exports = removeDuplicate;
