const version = 1;
const concatenate = require("./concatenate.js"),
	flatten = require("./flatten.js"),
	removeDuplicate = require("./remove-duplicate.js"),
	toObject = require("./to-object.js");
module.exports = {
	changeCase: require("./change-case.js"),
	concat: concatenate,
	concatenate: concatenate,
	divide: require("./divide.js"),
	ensurePrefix: require("./ensure-prefix.js"),
	ensureSuffix: require("./ensure-suffix.js"),
	flat: flatten,
	flatten: flatten,
	merge: concatenate,
	removeANSIEscapeCode: require("./remove-ansi-escape-code.js"),
	removeDuplicate: removeDuplicate,
	reverseIndex: require("./reverse-index.js"),
	toObj: toObject,
	toObject: toObject,
	uniq: removeDuplicate,
	unique: removeDuplicate,
	v: version,
	ver: version,
	version: version
};
