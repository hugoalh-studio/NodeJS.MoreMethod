let logEmit = [];
/**
 * @private
 * @function processWarning
 * @param {{code:string,detail:string,summary:string}} option
 * @returns {void}
 */
function processWarning({ code, detail = "", summary }) {
	if (logEmit.includes(code) === false) {
		logEmit.push(code);
		process.emitWarning(
			summary,
			{
				code,
				detail
			}
		);
	};
};
module.exports = processWarning;
