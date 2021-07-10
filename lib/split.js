// $<Note>$ This is draft!
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function split
 * @description Split a string with separator.
 * @param {string} item Item that need to split.
 * @param {object} [option={}] Option.
 * @param {RegExp} [option.delimiter=/\s/gu] The pattern describing where each split should occur.
 * @param {boolean} [option.insideBracket=false] Split inside bracket.
 * @param {boolean} [option.insideQuote=false] Split inside quote.
 * @returns {string[]} A splitted string.
 */
function split(item, option = {}) {
	let runtime = {
		delimiter: /\s/gu,
		insideBracket: false,
		insideQuote: false
	};
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument \`item\` must be type of string (non-nullable)!`);
	};
	if (advancedDetermine.isObjectPair(option) === false) {
		throw new TypeError(`Argument \`option\` must be type of object pair!`);
	};
	if (typeof option.delimiter !== "undefined") {
		if (advancedDetermine.isRegularExpression(option.delimiter) === true) {
			runtime.delimiter = option.delimiter;
		} else if (advancedDetermine.isString(option.delimiter) === true) {
			runtime.delimiter = new RegExp(option.delimiter, "gu");
		} else {
			throw new TypeError(`Argument \`option.delimiter\` must be type of string (non-nullable) or regular expression!`);
		};
	};
	if (typeof option.insideBracket !== "undefined") {
		if (advancedDetermine.isBoolean(option.insideBracket) !== true) {
			throw new TypeError(`Argument \`option.insideBracket\` must be type of boolean!`);
		};
		runtime.insideBracket = option.insideBracket;
	};
	if (typeof option.insideQuote !== "undefined") {
		if (advancedDetermine.isBoolean(option.insideQuote) !== true) {
			throw new TypeError(`Argument \`option.insideQuote\` must be type of boolean!`);
		};
		runtime.insideQuote = option.insideQuote;
	};
	if (runtime.insideBracket === true && runtime.insideQuote === true) {
		return item.split(runtime.delimiter);
	};
	if (
		"'".search(runtime.delimiter) !== -1 ||
		"\"".search(runtime.delimiter) !== -1 ||
		"`".search(runtime.delimiter) !== -1
	) {
		console.warn(`Argument "option.delimiter"'s value can cause an unexpected result!`);
	};
	let itemArray = item.replace(/\r\n/gu, "\n").split("\n"),
		resultFull = [];
	itemArray.forEach((line) => {
		let resultLine = [];
		for (let cursorHead = 0; cursorHead < line.length; cursorHead++) {
			if (line.search(runtime.delimiter) === -1) {
				resultLine.push(line);
				cursorHead = line.length;
				continue;
			};
			if (line.search(runtime.delimiter) === cursorHead) {
				let match = line.substring(cursorHead).match(runtime.delimiter)[0];
				resultLine.push(line.substring(cursorHead, cursorHead + match.length));
				cursorHead = cursorHead + match.length - 1;
				continue;
			};
			let cursorTail = cursorHead,
				delta;
			switch (line.charAt(cursorHead)) {
				case "'":
					if (runtime.insideQuote === false) {
						delta = ["\\'", 0, "'"];
					};
					break;
				case "\"":
					if (runtime.insideQuote === false) {
						delta = ["\\\"", 0, "\""];
					};
					break;
				case "`":
					break;
				default:
					break;
			};
		};
		resultFull.push(...resultLine);
	});
	return resultFull;
};
module.exports = split;
