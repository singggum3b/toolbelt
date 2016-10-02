/**
 * Replacement for switch-case flow control
 * @param keyName
 * @param object
 * @param defaultResult
 * @returns {any}
 */
export function match(keyName, object, defaultResult) {
	const result = object[keyName];
	return result ? result() : defaultResult ? defaultResult() : undefined;
}

/**
 * Check if an target is empty object or falsy value
 * @param obj
 * @returns {boolean}
 */
export function isEmptyOrFalsy(obj) {
	return !obj || (Object.keys(obj).length === 0 && obj.constructor === Object);
}
