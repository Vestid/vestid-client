import FireBase from '../'

class FireStoreService {
	constructor() {
		this.db = FireBase.getFireStore()
	}

	//checkUID(user, uid) {
	//	console.log('checkUID user: ', user)
	//	console.log('checkUID uid: ', uid)
	//	this.db.collection('users').doc(`${uid}`).set({firstname: 'anything', lastname: 'parker'}, {merge: true})
	//
	//}

}
export default new FireStoreService()