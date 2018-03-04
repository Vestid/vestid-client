export const formatFormInput = (key, value) => (
  (key === 'seekingLoanAmount') ? parseIntValue(key, value) : parseStringValue(key, value)
)

export const parseStringValue = (key, str) => (
  (typeof str === 'string' && isNaN(str)) ? Object.assign({}, {[key]:{placeholder: str, verified: true}}) : Object.assign({}, {[key]:{placeholder: str, verified: false}})
)

export const parseIntValue = (key, num) => (
  (!isNaN(num) && typeof num !== 'string') ?  Object.assign({}, {[key]:{placeholder: num, verified: true}}) : Object.assign({}, {[key]:{placeholder: num, verified: false}})
)