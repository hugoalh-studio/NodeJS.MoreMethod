const advancedDetermine = require("@hugoalh/advanced-determine"),
	checkOption = require("../internal/check-option.js");
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
 * @param {string} item
 * @param {object} [option={}]
 * @param {string} [option.case="dash"]
 * @param {boolean} [option.replaceSymbol=true]
 * @param {string} [option.separater="-"]
 * @param {boolean} [option.upperCaseFirstWordFirstCharacter=false]
 * @param {boolean} [option.upperCaseFirstWordOtherCharacter=false]
 * @param {boolean} [option.upperCaseOtherWordFirstCharacter=false]
 * @param {boolean} [option.upperCaseOtherWordOtherCharacter=false]
 * @returns {string}
 */
function changeCase(item, option = {}) {
	let runtime = {
		replaceSymbol: true,
		separater: "-",
		upperCaseFirstWordFirstCharacter: false,
		upperCaseFirstWordOtherCharacter: false,
		upperCaseOtherWordFirstCharacter: false,
		upperCaseOtherWordOtherCharacter: false
	};
	checkOption(option);
	item = item.trim();
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument "item" must be type of string (non-nullable)!`);
	};
	if (typeof option.replaceSymbol !== "undefined") {
		if (advancedDetermine.isBoolean(option.replaceSymbol) !== true) {
			throw new TypeError(`Argument "option.replaceSymbol" must be type of boolean!`);
		};
		runtime.replaceSymbol = option.replaceSymbol;
	};
	if (typeof option.case === "undefined") {
		if (typeof option.separater !== "undefined") {
			if (advancedDetermine.isString(option.separater) !== true) {
				throw new TypeError(`Argument "option.separater" must be type of string (non-nullable)!`);
			};
			runtime.separater = option.separater;
		};
		if (typeof option.upperCaseFirstWordFirstCharacter !== "undefined") {
			if (advancedDetermine.isBoolean(option.upperCaseFirstWordFirstCharacter) !== true) {
				throw new TypeError(`Argument "option.upperCaseFirstWordFirstCharacter" must be type of boolean!`);
			};
			runtime.upperCaseFirstWordFirstCharacter = option.upperCaseFirstWordFirstCharacter;
		};
		if (typeof option.upperCaseFirstWordOtherCharacter !== "undefined") {
			if (advancedDetermine.isBoolean(option.upperCaseFirstWordOtherCharacter) !== true) {
				throw new TypeError(`Argument "option.upperCaseFirstWordOtherCharacter" must be type of boolean!`);
			};
			runtime.upperCaseFirstWordOtherCharacter = option.upperCaseFirstWordOtherCharacter;
		};
		if (typeof option.upperCaseOtherWordFirstCharacter !== "undefined") {
			if (advancedDetermine.isBoolean(option.upperCaseOtherWordFirstCharacter) !== true) {
				throw new TypeError(`Argument "option.upperCaseOtherWordFirstCharacter" must be type of boolean!`);
			};
			runtime.upperCaseOtherWordFirstCharacter = option.upperCaseOtherWordFirstCharacter;
		};
		if (typeof option.upperCaseOtherWordOtherCharacter !== "undefined") {
			if (advancedDetermine.isBoolean(option.upperCaseOtherWordOtherCharacter) !== true) {
				throw new TypeError(`Argument "option.upperCaseOtherWordOtherCharacter" must be type of boolean!`);
			};
			runtime.upperCaseOtherWordOtherCharacter = option.upperCaseOtherWordOtherCharacter;
		};
	} else {
		if (advancedDetermine.isString(option.case) !== true) {
			throw new TypeError(`Argument "option.case" must be type of string (non-nullable)!`);
		};
		if (option.case.search(/^capital(?:-?case)?$/giu) === 0) {
			runtime.separater = " ";
			runtime.upperCaseFirstWordFirstCharacter = true;
			runtime.upperCaseFirstWordOtherCharacter = false;
			runtime.upperCaseOtherWordFirstCharacter = true;
			runtime.upperCaseOtherWordOtherCharacter = false;
		} else if (option.case.search(/^const(?:ant)?(?:-?case)?$/giu) === 0) {
			runtime.separater = "_";
			runtime.upperCaseFirstWordFirstCharacter = true;
			runtime.upperCaseFirstWordOtherCharacter = true;
			runtime.upperCaseOtherWordFirstCharacter = true;
			runtime.upperCaseOtherWordOtherCharacter = true;
		} else if (option.case.search(/^dash(?:-?case)?$/giu) === 0) {
			runtime.separater = "-";
			runtime.upperCaseFirstWordFirstCharacter = false;
			runtime.upperCaseFirstWordOtherCharacter = false;
			runtime.upperCaseOtherWordFirstCharacter = false;
			runtime.upperCaseOtherWordOtherCharacter = false;
		} else if (option.case.search(/^(?:low(?:er)?-?)?(?:camel|dromedary)(?:-?case)?$/giu) === 0) {
			runtime.separater = "";
			runtime.upperCaseFirstWordFirstCharacter = false;
			runtime.upperCaseFirstWordOtherCharacter = false;
			runtime.upperCaseOtherWordFirstCharacter = true;
			runtime.upperCaseOtherWordOtherCharacter = false;
		} else if (option.case.search(/^(?:up(?:per)?-?camel|pascal)(?:-?case)?$/giu) === 0) {
			runtime.separater = "";
			runtime.upperCaseFirstWordFirstCharacter = true;
			runtime.upperCaseFirstWordOtherCharacter = false;
			runtime.upperCaseOtherWordFirstCharacter = true;
			runtime.upperCaseOtherWordOtherCharacter = false;
		} else if (option.case.search(/^(?:snake|underscore)(?:-?case)?$/giu) === 0) {
			runtime.separater = "_";
			runtime.upperCaseFirstWordFirstCharacter = false;
			runtime.upperCaseFirstWordOtherCharacter = false;
			runtime.upperCaseOtherWordFirstCharacter = false;
			runtime.upperCaseOtherWordOtherCharacter = false;
		} else if (option.case.search(/^swap(?:-?case)?$/giu) === 0) {
			return changeCaseSwap(item);
		} else {
			throw new SyntaxError(`Argument "option.case"'s value does not match any pattern!`);
		};
	};
	let itemArray = item.replace(/([A-Z])/gu, " $1");
	if (runtime.replaceSymbol === true) {
		itemArray = itemArray.replace(/(?:[^\d\s\w]+|_+|[\n\r]+)/giu, " ");
	} else {
		itemArray = itemArray.replace(/[-_\n\r\s]+/gu, " ");
	};
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
	let result = Object.values(resultObject).join(runtime.separater);
	while (runtime.separater.length > 0 && result.search(`${runtime.separater}${runtime.separater}`) !== -1) {
		result = result.replace(`${runtime.separater}${runtime.separater}`, runtime.separater);
	};
	return result;
};
module.exports = changeCase;
