import t from "tcomb-validation";

/**
 * DRY subtype helper
 * @param type
 * @param getValidationErrorMessage
 * @param options
 * @returns {*}
 */
export function subType(type, getValidationErrorMessage, options) {
	const _subtype = t.refinement(type, (x) => {
		return !t.String.is(getValidationErrorMessage(x));
	}, options);
	_subtype.getValidationErrorMessage = getValidationErrorMessage;
	return _subtype;
}
