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
  (!isNaN(num) && num)
	  ? Object.assign({}, {[key]:{placeholder: num, verified: true, color: `${hovergreen}`}})
	  : Object.assign({}, {[key]:{placeholder: num, verified: false, color: `${invalidred}`}})
)

export const parseLoanForm = (form) => {
	let formObj = {}
	Object.entries(form).map(e => formObj[e[0]] = e[1].placeholder)
	return formObj
}