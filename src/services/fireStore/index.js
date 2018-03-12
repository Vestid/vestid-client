import FireBase from '../'

export default class FireStoreService extends FireBase {
	constructor(options) {
		super(options)
	}

	static addUserLoanForm(form, uid) {
		return super.fireStore.collection('users').doc(`${uid}`).set(form, {merge: true})
			.catch(err => (err))
	}
}