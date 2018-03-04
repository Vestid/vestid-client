export const formatFormInput = (input) => (
  input.hasOwnProperty('seekingLoanAmount') ? parseIntValue(input) : parseStringValue(input)
)

export const parseStringValue = (typeStr) => (
  Object.values(typeStr).map(str => (
    (typeof str === 'string') ? Object.assign({}, typeStr, {verified: true}) : Object.assign({}, typeStr, {verified: false})
  )
))

export const parseIntValue = (typeInt) => (
    Object.values(typeInt).map(num => (
      (!isNaN(num)) ?  Object.assign({}, typeInt, {verified: true}) : Object.assign({}, typeInt, {verified: false})
    ))
)