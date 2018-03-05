import {invalidred, hovergreen} from '../styles/colors_'

export const formatFormInput = (key, value) => (
  (key === 'seekingLoanAmount') ? parseIntValue(key, value) : parseStringValue(key, value)
)

export const parseStringValue = (key, str) => (
  (typeof str === 'string' && isNaN(str))
	  ? Object.assign({}, {[key]:{placeholder: str, verified: true, color: `${hovergreen}`}})
	  : Object.assign({}, {[key]:{placeholder: str, verified: false, color: `${invalidred}`}})
)

export const parseIntValue = (key, num) => (
  (!isNaN(num))
	  ? Object.assign({}, {[key]:{placeholder: num, verified: true, color: `${hovergreen}`}})
	  : Object.assign({}, {[key]:{placeholder: num, verified: false, color: `${invalidred}`}})
)