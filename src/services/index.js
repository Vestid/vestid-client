import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/messaging'

export class FireBase {
	constructor(options) {
		FireBase.firebase = firebase.initializeApp(options)
		FireBase.fireStore = firebase.firestore()
		FireBase.fireAuth = firebase.auth()
		FireBase.fireMessaging = firebase.messaging()
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
