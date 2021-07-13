const advancedDetermine = require("@hugoalh/advanced-determine"),
	checkOption = require("./internal/check-option.js"),
	processWarning = require("./internal/process-warning.js");
/**
 * @private
 * @function changeCaseSwap
 * @param {string} item
 * @returns {string}
 */
function changeCaseSwap(item) {
	let itemArray = item.split("");
	let resultObject = {};
	Promise.allSettled(
		itemArray.map((element, index) => {
			new Promise(() => {
				if (advancedDetermine.isStringLowerCase(element) === true) {
					resultObject[index] = element.toUpperCase();
				} else if (advancedDetermine.isStringUpperCase(element) === true) {
					resultObject[index] = element.toLowerCase();
				} else {
					resultObject[index] = element;
				};
			}).catch();
		})
	);
	return Object.values(resultObject).join("");
};
/**
 * @function changeCase
 * @description Change string case.
 * @param {string} item String that need to change case.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowSymbol=false] Allow non-word character(s).
 * @param {string} [option.case] Preset of case style.
 * @param {string} [option.delimiter="-"] Delimiter between word(s).
 * @param {boolean} [option.upperCaseFirstWordFirstCharacter=false] Change the first word first character to upper case or not.
 * @param {boolean} [option.upperCaseFirstWordOtherCharacter=false] Change the first word other character to upper case or not.
 * @param {boolean} [option.upperCaseOtherWordFirstCharacter=false] Change the other word first character to upper case or not.
 * @param {boolean} [option.upperCaseOtherWordOtherCharacter=false] Change the other word other character to upper case or not.
 * @returns {string} A case-changed string.
 */
function changeCase(item, option = {}) {
	let runtime = {
		allowSymbol: false,
		delimiter: "-",
		upperCaseFirstWordFirstCharacter: false,
		upperCaseFirstWordOtherCharacter: false,
		upperCaseOtherWordFirstCharacter: false,
		upperCaseOtherWordOtherCharacter: false
	};
	checkOption(option);
	item = item.trim();
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument \`item\` must be type of string (non-nullable)!`);
	};
	if (advancedDetermine.isStringASCII(item) !== true) {
		processWarning({
			code: "MORE_METHOD_CHANGE_CASE_NON_ASCII",
			detail: "",
			summary: "Function `changeCase` is not fully supported non ASCII character(s)!"
		});
	};
	if (typeof option.allowSymbol !== "undefined") {
		if (advancedDetermine.isBoolean(option.allowSymbol) !== true) {
			throw new TypeError(`Argument \`option.allowSymbol\` must be type of boolean!`);
		};
		runtime.allowSymbol = option.allowSymbol;
	};
	if (typeof option.case === "undefined") {
		if (typeof option.delimiter !== "undefined") {
			if (advancedDetermine.isString(option.delimiter) !== true) {
				throw new TypeError(`Argument \`option.delimiter\` must be type of string (non-nullable)!`);
			};
			runtime.delimiter = option.delimiter;
		};
		if (typeof option.upperCaseFirstWordFirstCharacter !== "undefined") {
			if (advancedDetermine.isBoolean(option.upperCaseFirstWordFirstCharacter) !== true) {
				throw new TypeError(`Argument \`option.upperCaseFirstWordFirstCharacter\` must be type of boolean!`);
			};
			runtime.upperCaseFirstWordFirstCharacter = option.upperCaseFirstWordFirstCharacter;
		};
		if (typeof option.upperCaseFirstWordOtherCharacter !== "undefined") {
			if (advancedDetermine.isBoolean(option.upperCaseFirstWordOtherCharacter) !== true) {
				throw new TypeError(`Argument \`option.upperCaseFirstWordOtherCharacter\` must be type of boolean!`);
			};
			runtime.upperCaseFirstWordOtherCharacter = option.upperCaseFirstWordOtherCharacter;
		};
		if (typeof option.upperCaseOtherWordFirstCharacter !== "undefined") {
			if (advancedDetermine.isBoolean(option.upperCaseOtherWordFirstCharacter) !== true) {
				throw new TypeError(`Argument \`option.upperCaseOtherWordFirstCharacter\` must be type of boolean!`);
			};
			runtime.upperCaseOtherWordFirstCharacter = option.upperCaseOtherWordFirstCharacter;
		};
		if (typeof option.upperCaseOtherWordOtherCharacter !== "undefined") {
			if (advancedDetermine.isBoolean(option.upperCaseOtherWordOtherCharacter) !== true) {
				throw new TypeError(`Argument \`option.upperCaseOtherWordOtherCharacter\` must be type of boolean!`);
			};
			runtime.upperCaseOtherWordOtherCharacter = option.upperCaseOtherWordOtherCharacter;
		};
	} else {
		if (advancedDetermine.isString(option.case) !== true) {
			throw new TypeError(`Argument \`option.case\` must be type of string (non-nullable)!`);
		};
		if (option.case.search(/^capital(?:-?case)?$/giu) === 0) {
			runtime.delimiter = " ";
			runtime.upperCaseFirstWordFirstCharacter = true;
			runtime.upperCaseFirstWordOtherCharacter = false;
			runtime.upperCaseOtherWordFirstCharacter = true;
			runtime.upperCaseOtherWordOtherCharacter = false;
		} else if (option.case.search(/^const(?:ant)?(?:-?case)?$/giu) === 0) {
			runtime.delimiter = "_";
			runtime.upperCaseFirstWordFirstCharacter = true;
			runtime.upperCaseFirstWordOtherCharacter = true;
			runtime.upperCaseOtherWordFirstCharacter = true;
			runtime.upperCaseOtherWordOtherCharacter = true;
		} else if (option.case.search(/^dash(?:-?case)?$/giu) === 0) {
			runtime.delimiter = "-";
			runtime.upperCaseFirstWordFirstCharacter = false;
			runtime.upperCaseFirstWordOtherCharacter = false;
			runtime.upperCaseOtherWordFirstCharacter = false;
			runtime.upperCaseOtherWordOtherCharacter = false;
		} else if (option.case.search(/^(?:dromedary|(?:low(?:er)?-?)?camel)(?:-?case)?$/giu) === 0) {
			runtime.delimiter = "";
			runtime.upperCaseFirstWordFirstCharacter = false;
			runtime.upperCaseFirstWordOtherCharacter = false;
			runtime.upperCaseOtherWordFirstCharacter = true;
			runtime.upperCaseOtherWordOtherCharacter = false;
		} else if (option.case.search(/^(?:pascal|up(?:per)?-?camel)(?:-?case)?$/giu) === 0) {
			runtime.delimiter = "";
			runtime.upperCaseFirstWordFirstCharacter = true;
			runtime.upperCaseFirstWordOtherCharacter = false;
			runtime.upperCaseOtherWordFirstCharacter = true;
			runtime.upperCaseOtherWordOtherCharacter = false;
		} else if (option.case.search(/^(?:snake|underscore)(?:-?case)?$/giu) === 0) {
			runtime.delimiter = "_";
			runtime.upperCaseFirstWordFirstCharacter = false;
			runtime.upperCaseFirstWordOtherCharacter = false;
			runtime.upperCaseOtherWordFirstCharacter = false;
			runtime.upperCaseOtherWordOtherCharacter = false;
		} else if (option.case.search(/^swap(?:-?case)?$/giu) === 0) {
			return changeCaseSwap(item);
		} else {
			throw new SyntaxError(`Argument \`option.case\`'s value does not match any pattern!`);
		};
	};
	let itemArray = item.replace(/([A-Z])/gu, " $1");
	itemArray = (runtime.allowSymbol === false) ? itemArray.replace(/(?:[^\d\s\w]+|_+|[\n\r]+)/giu, " ") : itemArray.replace(/[-_\n\r\s]+/gu, " ");
	itemArray = itemArray.trim().split(" ");
	itemArray.forEach((element, index) => {
		itemArray[index] = element.toLowerCase();
	});
	let resultObject = {};
	Promise.allSettled(
		itemArray.map((element, index) => {
			new Promise(() => {
				let first = element.charAt(0),
					other = element.slice(1);
				if (index === 0) {
					resultObject[index] = `${(runtime.upperCaseFirstWordFirstCharacter === true) ? first.toUpperCase() : first.toLowerCase()}${(runtime.upperCaseFirstWordOtherCharacter === true) ? other.toUpperCase() : other.toLowerCase()}`;
				} else {
					resultObject[index] = `${(runtime.upperCaseOtherWordFirstCharacter === true) ? first.toUpperCase() : first.toLowerCase()}${(runtime.upperCaseOtherWordOtherCharacter === true) ? other.toUpperCase() : other.toLowerCase()}`;
				}
			}).catch();
		})
	);
	let result = Object.values(resultObject).join(runtime.delimiter);
	while (runtime.delimiter.length > 0 && result.search(`${runtime.delimiter}${runtime.delimiter}`) !== -1) {
		result = result.replace(`${runtime.delimiter}${runtime.delimiter}`, runtime.delimiter);
	};
	return result;
};
module.exports = changeCase;
