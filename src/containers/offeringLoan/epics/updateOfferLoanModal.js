import {Observable} from 'rxjs/Observable'
import actionTypes from '../../modals/actions/actionTypes'
import {updateOfferLoanModalLoaded, updateOfferLoanModalVisibility} from '../../modals/actions/actions'

export default (action$, store) => {
	return action$.ofType(actionTypes.UPDATE_OFFER_LOAN_MODAL)
		.mergeMap(({type, payload}) => {
			const {loaded, visible} = payload
			const updateLoaded = Object.assign({}, {loaded: !loaded})
			const updateVisible = Object.assign({}, {visible: !visible})
			return Observable.of(
				updateOfferLoanModalVisibility(updateVisible),
				updateOfferLoanModalLoaded(updateLoaded)
			)
		})
}