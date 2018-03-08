import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/messaging'
import options from './config'

class FireBase {
	constructor(options) {
		FireBase.firebase = firebase.initializeApp(options)
		FireBase.fireStore = FireBase.firebase.firestore()
		FireBase.fireAuth = FireBase.firebase.auth()
		FireBase.fireMessaging = FireBase.firebase.messaging()
		FireBase.User = FireBase.firebase.User
	}
	getUser() {
		return FireBase.User
	}

	 getFireStore() {
		return FireBase.fireStore
	}

	 getFireAuth() {
		return FireBase.fireAuth
	}

	 getFireMessaging() {
		return FireBase.fireMessaging
	}
}

export default new FireBase(options)
