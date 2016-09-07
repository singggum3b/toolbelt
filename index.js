import {
	bindOperationToActionCreators,
} from "redux-operations";
import { bindActionCreators } from "redux";

const globe = {
	Utils: {
		/**
		 * Replacement for switch-case flow control
		 * @param keyName
		 * @param object
		 * @param defaultResult
		 * @returns {any}
		 */
		match(keyName, object, defaultResult) {
			const result = object[keyName];
			return result ? result() : defaultResult ? defaultResult() : undefined;
		},
		/**
		 * Sugar for binding operation metadata to normal actionCreators
		 * @param dispatch
		 * @param bindArray
		 * @returns {Object}
		 */
		bindOperation(dispatch, bindArray) {
			const actionCreators = bindArray.map((eachBind) => {
				return bindOperationToActionCreators(
					eachBind[1], // LocationInState
					eachBind[0], // Reducer
					eachBind[2] // Action creators
				);
			}).reduce((result,eachBindResult) => (Object.assign(result,eachBindResult)),{});
			return bindActionCreators(actionCreators, dispatch);
		},
		/**
		 * Check if an target is empty object or falsy value
		 * @param obj
		 * @returns {boolean}
		 */
		isEmptyOrFalsy(obj) {
			return !obj || (Object.keys(obj).length === 0 && obj.constructor === Object);
		},
	},
	DC: {}
};

export default globe;
