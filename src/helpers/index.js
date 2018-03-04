export const formatFormInput = (key, value) => (
  (key === 'seekingLoanAmount') ? parseIntValue(key, value) : parseStringValue(key, value)
)

export const parseStringValue = (key, str) => (
  (typeof str === 'string' && isNaN(str)) ? Object.assign({}, {[key]:{placeholder: str, verified: true}}) : Object.assign({}, {[key]:{placeholder: str, verified: false}})
)
//todo: this is not verifying properly
export const parseIntValue = (key, num) => (
  (!isNaN(num)) ?  Object.assign({}, {[key]:{placeholder: num, verified: true}}) : Object.assign({}, {[key]:{placeholder: num, verified: false}})
)