import actionTypes from './actions/actionTypes'

const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john_doe@example.com',
    seekingLoanAmount: 'loan amount you are seeking',
    businessType: 'type of business, e.g. technology, culinary, etc.',
    location: 'where are you located',
    description: 'please describe in a couple sentences the "why" behind your business and what this loan will be used for'
}

export default (state = initialState, {type = null, payload = null}) => {
    switch(type) {
        case actionTypes.UPDATE_SEEKING_LOAN_FORM: return Object.assign({}, state, payload)
        default: return state
    }
}