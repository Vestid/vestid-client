import FireBase from '../'

export default class FireStoreService extends FireBase {
	constructor(options) {
		super(options)
	}
	
	static getUser() {
		return super.user()
	}

	static addUserLoanForm(type, form, uid) {
		return super.fireStore.collection(`${type}`).doc(`${uid}`).set(form, {merge: true})
			.catch(err => (err))
	}
}