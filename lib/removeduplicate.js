/*==================
[NodeJS] More Method - Remove Duplicate
	Language:
		NodeJS/10.0.0
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
	item.forEach((element) => {
		if (result.includes(element) === false) {
			result.push(element);
		};
	});
	return result;
};
module.exports = removeDuplicate;
