/*==================
[NodeJS] More Method - Split
	Language:
		NodeJS/10.0.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function split
 * @description Split a string with separator.
 * @param {string} item Item that need to split.
 * @param {object} [option={}] Option.
 * @param {number} [option.limit=Infinity] A limit on the number of substrings to be included in the array.
 * @param {(string|RegExp)} [option.separator=/\s/gu] The pattern describing where each split should occur.
 * @param {boolean} [option.insideBracket=false] Split inside bracket.
 * @param {boolean} [option.insideQuote=false] Split inside quote.
 * @returns {string[]} A splitted string.
 */
function split(item, option = {}) {
	let runtime = {
		limit: Infinity,
		separator: /\s/gu,
		insideBracket: false,
		insideQuote: false
	};
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument "item" must be type of string (non-nullable)! ([NodeJS] More Method - Split)`);
	};
	if (advancedDetermine.isObjectPair(option) === false) {
		throw new TypeError(`Argument "option" must be type of object pair! ([NodeJS] More Method - Split)`);
	};
	if (typeof option.limit !== "undefined") {
		if (option.limit !== Infinity && advancedDetermine.isNumberPositiveInteger(option.limit) !== true) {
			throw new TypeError(`Argument "option.limit" must be type of positive integer number! ([NodeJS] More Method - Split)`);
		};
		runtime.limit = option.limit;
	};
	if (typeof option.separator !== "undefined") {
		if (advancedDetermine.isRegularExpression(option.separator) === true) {
			runtime.separator = option.separator;
		} else if (advancedDetermine.isString(option.separator) === true) {
			runtime.separator = new RegExp(option.separator, "gu");
		} else {
			throw new TypeError(`Argument "option.separator" must be type of string (non-nullable) or regular expression! ([NodeJS] More Method - Split)`);
		};
	};
	if (typeof option.insideBracket !== "undefined") {
		if (advancedDetermine.isBoolean(option.insideBracket) !== true) {
			throw new TypeError(`Argument "option.insideBracket" must be type of boolean! ([NodeJS] More Method - Split)`);
		};
		runtime.insideBracket = option.insideBracket;
	};
	if (typeof option.insideQuote !== "undefined") {
		if (advancedDetermine.isBoolean(option.insideQuote) !== true) {
			throw new TypeError(`Argument "option.insideQuote" must be type of boolean! ([NodeJS] More Method - Split)`);
		};
		runtime.insideQuote = option.insideQuote;
	};
	if (runtime.insideBracket === true && runtime.insideQuote === true) {
		return item.split(runtime.separator);
	};
	let itemArray = item.replace(/\r\n/gu, "\n").split("\n"),
		resultFull = [];
	itemArray.forEach((line) => {
		let resultLine = [];
		for (let base = 0; base < line.length; base++) {
			let cursor = base;
			if (line.search(runtime.separator) === base) {
				let match = line.substring(base).match(runtime.separator)[0];
				resultLine.push(line.substring(base, base + match.length));
				base = base + match.length - 1;
				continue;
			};
			switch (line.charAt(base)) {
				case `"`:
				case `'`:
					if (runtime.insideQuote === false) {
						if (base > 0)
					};
					break;
				case "`":
					break;
				default:
					break;
			}
		};
		resultFull.push(...resultLine);
	});
	return resultFull;
};
module.exports = split;
