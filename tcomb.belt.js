import t from "tcomb-validation";

/**
 * DRY subtype helper
 * @param type
 * @param getValidationErrorMessage
 * @param options
 * @returns {*}
 */
function _subType(type, overrideTypeMsg, getValidationErrorMessage, options) {
	function _getVldMsg(x) {
		if (overrideTypeMsg) {
			if (!t.validate(x, type).isValid()) return overrideTypeMsg;
		}
		return getValidationErrorMessage(x);
	}
	const _subtype = t.refinement(overrideTypeMsg ? t.Any : type, (x) => {
		return !t.String.is(_getVldMsg(x));
	}, options);
	_subtype.getValidationErrorMessage = _getVldMsg;
	return _subtype;
}

export function subType() {
	if (arguments.length < 4) throw new Error("Subtype call need 4 argument");
	if (arguments[1] && typeof arguments[1] !== "string")
		throw new Error("[overrideTypeMsg] must be a string or null");
	return _subType.apply(null,arguments);
}
