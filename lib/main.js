/*==================
[NodeJS] More Method
	Language:
		NodeJS/10.13.0
==================*/
/**
 * @const {string} version
 */
const version = "1.0.0";

const concatenate = require("./concatenate.js"),
	flatten = require("./flatten.js"),
	removeDuplicate = require("./removeduplicate.js"),
	toDromedaryCase = require("./todromedarycase.js"),
	toObject = require("./toobject.js"),
	toPascalCase = require("./topascalcase.js"),
	toUnderscoreCase = require("./tounderscorecase.js");
module.exports = {
	concat: concatenate,
	concatenate: concatenate,
	ensurePrefix: require("./ensureprefix.js"),
	ensureSuffix: require("./ensuresuffix.js"),
	flat: flatten,
	flatten: flatten,
	merge: concatenate,
	removeDuplicate: removeDuplicate,
	reverse: require("./reverse.js"),
	split: require("./split.js"),
	toCamelCase: toDromedaryCase,
	toCapitalCase: require("./tocapitalcase.js"),
	toDashCase: require("./todashcase.js"),
	toDromedaryCase: toDromedaryCase,
	toLowerCamelCase: toDromedaryCase,
	toObj: toObject,
	toObject: toObject,
	toPascalCase: toPascalCase,
	toSnakeCase: toUnderscoreCase,
	toUnderscoreCase: toUnderscoreCase,
	toUpperCamelCase: toPascalCase,
	uniq: removeDuplicate,
	unique: removeDuplicate,
	v: version,
	ver: version,
	version: version
};
