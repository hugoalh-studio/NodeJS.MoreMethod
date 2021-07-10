/**
 * @private
 * @function processWarning
 * @param {{code:string,detail:string,summary:string}} option
 * @returns {void}
 */
function processWarning({ code, detail = "", summary }) {
	process.emitWarning(
		summary,
		{
			code,
			detail
		}
	);
};
module.exports = processWarning;
