export const formatFormInput = (input) => {
    console.log('starting format: ', input)
    return input.hasOwnProperty('seekingLoanAmount') ? parseIntValue(input) : parseStringValue(input)
}

export const parseStringValue = (typeStr) => {
    console.log('input was a string type: ', typeStr)
}

export const parseIntValue = (typeInt) => {
    console.log('input was a integer type: ', typeInt)
}