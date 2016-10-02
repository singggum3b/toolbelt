import {
	bindOperationToActionCreators,
} from "redux-operations";
import { bindActionCreators } from "redux";


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
