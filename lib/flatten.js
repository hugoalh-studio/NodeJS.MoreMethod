const advancedDetermine = require("@hugoalh/advanced-determine"),
	checkOption = require("./internal/check-option.js");
/**
 * @private
 * @function flattenArrayInternal
 * @param {*[]} item
 * @param {object} option
 * @param {number} option.currentDepth
 * @param {number} option.maximumDepth
 * @returns {*[]}
 */
function flattenArrayInternal(item, option) {
	let result = [];
	if (option.currentDepth >= option.maximumDepth) {
		result.push(...item);
	} else {
		for (let index = 0; index < item.length; index++) {
			if (advancedDetermine.isArray(item[index]) === true) {
				result.push(...flattenArrayInternal(
					item[index],
					{
						currentDepth: option.currentDepth + 1,
						maximumDepth: option.maximumDepth
					}
				));
			} else {
				result.push(item[index]);
			};
		};
	};
	return result;
};
/**
 * @private
 * @function flattenArray
 * @param {*[]} item
 * @param {object} [option]
 * @param {number} [option.maximumDepth=Infinity]
 * @returns {*[]}
 */
function flattenArray(item, option) {
	let runtime = {
		currentDepth: 0,
		maximumDepth: Infinity
	};
	if (typeof option.maximumDepth !== "undefined") {
		if (option.maximumDepth !== Infinity && advancedDetermine.isNumberPositiveSafeInteger(option.maximumDepth) !== true) {
			throw new TypeError(`Argument "option.maximumDepth" must be type of positive safe integer number!`);
		};
		runtime.maximumDepth = option.maximumDepth;
	};
	return flattenArrayInternal(item, runtime);
};
/**
 * @private
 * @function flattenObjectPairInternal
 * @param {string} keyTop
 * @param {*} value
 * @param {object} option
 * @param {number} option.currentDepth
 * @param {string} option.join
 * @param {boolean} option.keepArray
 * @param {number} option.maximumDepth
 * @returns {object}
 */
function flattenObjectPairInternal(keyTop, value, option) {
	let result = {};
	if (option.currentDepth >= option.maximumDepth) {
		result[keyTop] = value;
	} else if (advancedDetermine.isArray(value) === true && option.keepArray === false) {
		value.forEach((element, index) => {
			if (advancedDetermine.isArray(element) === true && option.keepArray === false) {
				let data = flattenObjectPairInternal(
					`${keyTop}${(keyTop.length === 0) ? "" : option.join}${index}`,
					element,
					{
						currentDepth: option.currentDepth + 1,
						join: option.join,
						keepArray: option.keepArray,
						maximumDepth: option.maximumDepth
					}
				);
				Object.keys(data).forEach((keyData) => {
					result[keyData] = data[keyData];
				});
			} else if (advancedDetermine.isObjectPair(element) === true) {
				Object.keys(element).forEach((keyObject) => {
					let data = flattenObjectPairInternal(
						`${keyTop}${(keyTop.length === 0) ? "" : option.join}${keyObject}`,
						element[keyObject],
						{
							currentDepth: option.currentDepth + 1,
							join: option.join,
							keepArray: option.keepArray,
							maximumDepth: option.maximumDepth
						}
					);
					Object.keys(data).forEach((keyData) => {
						result[keyData] = data[keyData];
					});
				});
			} else {
				result[`${keyTop}${(keyTop.length === 0) ? "" : option.join}${index}`] = value[index];
			};
		});
	} else if (advancedDetermine.isObjectPair(value) === true) {
		Object.keys(value).forEach((keyObject) => {
			let data = flattenObjectPairInternal(
				`${keyTop}${(keyTop.length === 0) ? "" : option.join}${keyObject}`,
				value[keyObject],
				{
					currentDepth: option.currentDepth + 1,
					join: option.join,
					keepArray: option.keepArray,
					maximumDepth: option.maximumDepth
				}
			);
			Object.keys(data).forEach((keyData) => {
				result[keyData] = data[keyData];
			});
		});
	} else {
		result[keyTop] = value;
	};
	return result;
};
/**
 * @private
 * @function flattenObjectPair
 * @param {object} item
 * @param {object} [option]
 * @param {string} [option.join="."]
 * @param {boolean} [option.keepArray=false]
 * @param {number} [option.maximumDepth=Infinity]
 * @returns {object}
 */
function flattenObjectPair(item, option) {
	let runtime = {
		currentDepth: 0,
		join: ".",
		keepArray: false,
		maximumDepth: Infinity
	};
	if (typeof option.join !== "undefined") {
		if (advancedDetermine.isString(option.join) !== true) {
			throw new TypeError(`Argument "option.join" must be type of string (non-nullable)!`);
		};
		runtime.join = option.join;
	};
	if (typeof option.keepArray !== "undefined") {
		if (advancedDetermine.isBoolean(option.keepArray) !== true) {
			throw new TypeError(`Argument "option.keepArray" must be type of boolean!`);
		};
		runtime.keepArray = option.keepArray;
	};
	if (typeof option.maximumDepth !== "undefined") {
		if (option.maximumDepth !== Infinity && advancedDetermine.isNumberPositiveSafeInteger(option.maximumDepth) !== true) {
			throw new TypeError(`Argument "option.maximumDepth" must be type of positive safe integer number!`);
		};
		runtime.maximumDepth = option.maximumDepth + 1;
	};
	return flattenObjectPairInternal("", item, runtime);
};
/**
 * @function flatten
 * @alias flat
 * @description Cause all sub-array elements or sub-object pairs concatenated into it recursively up to the specified depth.
 * @param {(*[]|object)} item Array or object pair that need to flatten.
 * @param {object} [option={}] Option.
 * @param {string} [option.join="."] Key join for sub-object pairs' keys.
 * @param {boolean} [option.keepArray=false] Keep array not to flatten in the object-pair.
 * @param {number} [option.maximumDepth=Infinity] The maximum depth level specifying how deep a nested array or object structure should be flatten.
 * @returns {(*[]|object)} A flattened array or object pair.
 */
function flatten(item, option = {}) {
	checkOption(option);
	if (advancedDetermine.isArray(item) !== false) {
		return flattenArray(item, option);
	};
	if (advancedDetermine.isObjectPair(item) !== false) {
		return flattenObjectPair(item, option);
	};
	throw new TypeError(`Argument "item" must be type of array or object pair!`);
};
module.exports = flatten;
