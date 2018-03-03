const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john_doe@example.com',
    seekingLoanAmount: ['$500', '$700', '$1000', '$1500', '$2000', 'Other' ],
    //location: '//TODO: react with HTML5 geolocation or JSON file of states',
    businessType: ['Technology', 'Culinary', 'Creative', 'Retail'],
    submissionValues: {
        firstName: null,
        lastName: null,
        email: null,
        seekingLoanAmount: null,
        businessType: null
    }
}

export default (state = initialState, {type, payload}) => {
    //switch(type) {
    //
    //}
    return state
}