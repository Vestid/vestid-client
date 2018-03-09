import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/messaging'
import options from './config'

export default class FireBase {
	constructor(options) {
		FireBase.firebase = firebase.initializeApp(options)
		FireBase.fireStore = FireBase.firebase.firestore()
		FireBase.fireAuth = FireBase.firebase.auth()
		FireBase.fireMessaging = FireBase.firebase.messaging()
		FireBase.User = FireBase.firebase.User
	}
	static getAppRoot(){
		return FireBase.firebase
	}
	static getUser() {
		return FireBase.User
	}

	 static getFireStore() {
		return FireBase.fireStore
	}

	 static getFireAuth() {
		return FireBase.fireAuth
	}

	 static getFireMessaging() {
		return FireBase.fireMessaging
	}
}

//export default new FireBase(options)
