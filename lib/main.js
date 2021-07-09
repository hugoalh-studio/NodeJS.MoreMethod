const version = 1;
const concatenate = require("./concatenate.js"),
	flatten = require("./flatten.js"),
	removeDuplicate = require("./array/remove-duplicate.js"),
	toObject = require("./array/to-object.js");
module.exports = {
	changeCase: require("./string/change-case.js"),
	concat: concatenate,
	concatenate: concatenate,
	ensurePrefix: require("./string/ensure-prefix.js"),
	ensureSuffix: require("./string/ensure-suffix.js"),
	flat: flatten,
	flatten: flatten,
	merge: concatenate,
	removeDuplicate: removeDuplicate,
	reverse: require("./reverse.js"),
	split: require("./string/split.js"),
	toObj: toObject,
	toObject: toObject,
	uniq: removeDuplicate,
	unique: removeDuplicate,
	v: version,
	ver: version,
	version: version
};
