const advancedDetermine = require("@hugoalh/advanced-determine");
function length(item, option = {}) {
};
module.exports = length;
function stringLength(string, { countAnsiEscapeCodes = false } = {}) {
	if (string === "") {
		return 0;
	}

	if (!countAnsiEscapeCodes) {
		string = stripAnsi(string);
	}

	if (string === "") {
		return 0;
	}

	return string.match(charRegex()).length;
}
