const advancedDetermine = require("@hugoalh/advanced-determine"),
	checkOption = require("./internal/check-option.js");
/**
 * @function divide
 * @description Divide an array or a string.
 * @param {(*[]|string)} item Array or string that need to divide.
 * @param {number} piece Divide to number of piece(s).
 * @param {object} [option={}] Option.
 * @param {string} [option.method="stack"]
 * @param {string} [option.remain="divide"]
 * @returns {(*[][]|string[])} A divided array or string.
 */
function divide(item, piece, option = {}) {
	let runtime = {
		method: "stack",
		remain: "divide"
	};
	checkOption(option);
	if (advancedDetermine.isString(item) === true) {
		item = item.split("");
	} else if (advancedDetermine.isArray(item) !== true) {
		throw new TypeError(`Argument \`item\` must be type of array (non-nullable) or string (non-nullable)!`);
	};
	if (advancedDetermine.isNumberPositiveSafeInteger(piece) !== true) {
		throw new TypeError(`Argument \`piece\` must be type of positive safe integer number!`);
	};
	if (piece < 1) {
		throw new RangeError(`Argument \`piece\` must be >= 1!`);
	};
	if (typeof option.method !== "undefined") {
		if (advancedDetermine.isString(option.method) !== true) {
			throw new TypeError(`Argument \`option.method\` must be type of string (non-nullable)!`);
		};
		runtime.method = option.method;
	};
	if (typeof option.remain !== "undefined") {
		if (advancedDetermine.isString(option.remain) !== true) {
			throw new TypeError(`Argument \`option.remain\` must be type of string (non-nullable)!`);
		};
		runtime.remain = option.remain;
	};
	let countGroup = Math.floor(item.length / piece),
		countRemain = item.length % piece;
	let result = [];
	for (let index = 0; index < piece; index++) {
		result.push([]);
	};
	if (runtime.remain.search(/^void$/giu) === 0) {
		for (let index = 0; index < countRemain; index++) {
			item.pop();
		};
	};
	// TODO
	switch (runtime.method) {
		case "even":
			for (let indexGroup = 1; indexGroup < countGroup; indexGroup++) {

			}
			break;
		case "split":

			break;
	};
	return result;
};
module.exports = divide;
