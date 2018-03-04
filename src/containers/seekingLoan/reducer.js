import {fromJS} from 'immutable'
import actionTypes from './actions/actionTypes'

const initialState = fromJS({
        firstName: { placeholder: 'john', verified: false },
        lastName: { placeholder:'doe', verified: false },
        email: { placeholder:'john_doe@example.com', verified: false },
        seekingLoanAmount: { placeholder:'loan amount you are seeking', verified: false },
        businessType: { placeholder:'type of business, e.g. technology, culinary, etc.', verified: false },
        location: { placeholder:'where are you located', verified: false },
        description: { placeholder: 'please describe in a couple sentences the "why" behind your business and what this loan will be used for', verified: false }
})

export default (state = initialState, {type = null, payload = null}) => {
    switch(type) {
        case actionTypes.UPDATE_SEEKING_LOAN_FORM: return state.merge(payload)
        default: return state
    }
}