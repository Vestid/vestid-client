import Immutable from 'immutable';
// needed to transform immutable state in redux store in redux logger
const reduxLoggerTransformImmutable = {
	stateTransformer: (state) => {
		const newState = {};
		for (const i of Object.keys(state)) {
			if (Immutable.Iterable.isIterable(state[i])) {
				newState[i] = state[i].toJS();
			} else {
				newState[i] = state[i];
			}
		}
		return newState;
	}
};
export default reduxLoggerTransformImmutable;