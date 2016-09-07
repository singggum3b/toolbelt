import {
	bindOperationToActionCreators,
} from "redux-operations";
import { bindActionCreators } from "redux";

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
 * Sugar for binding operation metadata to normal actionCreators
 * @param dispatch
 * @param bindArray
 * @returns {Object}
 */
export function bindOperation(dispatch, bindArray) {
	const actionCreators = bindArray.map((eachBind) => {
		return bindOperationToActionCreators(
			eachBind[1], // LocationInState
			eachBind[0], // Reducer
			eachBind[2] // Action creators
		);
	}).reduce((result,eachBindResult) => (Object.assign(result,eachBindResult)),{});
	return bindActionCreators(actionCreators, dispatch);
}

/**
 * Check if an target is empty object or falsy value
 * @param obj
 * @returns {boolean}
 */
export function isEmptyOrFalsy(obj) {
	return !obj || (Object.keys(obj).length === 0 && obj.constructor === Object);
}
