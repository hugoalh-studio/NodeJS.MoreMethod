const version = 1;
const concatenate = require("./concatenate.js"),
	flatten = require("./flatten.js"),
	removeDuplicate = require("./remove-duplicate.js"),
	toObject = require("./to-object.js");
module.exports = {
	changeCase: require("./change-case.js"),
	concat: concatenate,
	concatenate: concatenate,
	ensurePrefix: require("./ensure-prefix.js"),
	ensureSuffix: require("./ensure-suffix.js"),
	flat: flatten,
	flatten: flatten,
	merge: concatenate,
	removeDuplicate: removeDuplicate,
	reverse: require("./reverse.js"),
	split: require("./split.js"),
	toObj: toObject,
	toObject: toObject,
	uniq: removeDuplicate,
	unique: removeDuplicate,
	v: version,
	ver: version,
	version: version
};
