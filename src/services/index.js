import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/messaging'

export default class FireBase {
	constructor(options) {
		FireBase.firebase = firebase.initializeApp(options)
		FireBase.fireStore = FireBase.firebase.firestore()
		FireBase.fireAuth = FireBase.firebase.auth()
		FireBase.fireMessaging = FireBase.firebase.messaging()
		FireBase.User = FireBase.firebase.User
		console.log('Firebase USER: ', FireBase.User)
	}
}