const advancedDetermine = require("@hugoalh/advanced-determine"),
	checkOption = require("./internal/check-option.js");
function changeCase(item, option = {}) {
	let runtime = {
		replaceSymbol: false,
		separater: "-",
		upperCaseFirst: false,
		upperCaseOther: false
	};
	checkOption(option);
	if (advancedDetermine.isString(item) !== true) {
		throw new TypeError(`Argument "item" must be type of string (non-nullable)!`);
	};
	// TODO
	if (typeof option.method !== "undefined") {
		if (advancedDetermine.isString(option.method) !== true) {
			throw new TypeError(`Argument "option.method" must be type of string (non-nullable)!`);
		};
		runtime.method = option.method;
	} else {
		if (typeof option.method !== "undefined") {
			if (advancedDetermine.isString(option.method) !== true) {
				throw new TypeError(`Argument "option.method" must be type of string (non-nullable)!`);
			};
			runtime.method = option.method;
		};	
	};
	let itemArray;
	if (runtime.replaceSymbol === true) {
		itemArray = item.replace(/(?:[^\d\s\w]+|_+|[\n\r]+)/giu, " ").split(" ");
	} else {
		itemArray = item.replace(/[-_\n\r]+/gu, " ").split(" ");
	};
	let resultObject = {};
	Promise.allSettled(
		itemArray.map((element, index) => {
			new Promise(() => {
				let first = element.charAt(0),
					other = element.slice(1);
				resultObject[index] = `${(runtime.upperCaseFirst === true) ? first.toUpperCase() : first.toLowerCase()}${(runtime.upperCaseOther === true) ? other.toUpperCase() : other.toLowerCase()}`;
			}).catch();
		})
	);
	let result = Object.values(resultObject).join(runtime.separater);
	while (result.search(`${runtime.separater}${runtime.separater}`) !== -1) {
		result = result.replace(`${runtime.separater}${runtime.separater}`, runtime.separater);
	};
	return result;
};
module.exports = changeCase;
