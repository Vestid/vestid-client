import FireBase from '../'
import FireStoreService from '../fireStore'

class AuthService {
	constructor(){
		this.auth = FireBase.getFireAuth()
		this.user = FireBase.getUser()
		//this.checkChange = this.checkChange()
		//console.log('AuthService: ', this.auth)
		//console.log('this.user: ', this.user)
	}
	//checkChange() {
	//	this.auth.onAuthStateChanged(user => {
	//		if(user) {
	//			console.log('user exists: ', user.uid)
	//			FireStoreService.checkUID(user, user.uid)
	//		} else {
	//			console.log('no user: ', user)
	//		}
	//	})
	//}

	//authCheck() {
	//	//const authenticate = FireBase.getFireAuth()
	//	//authenticate.onStateChange()
	//	if(this.auth.currentUser){
	//		return this.auth.currentUser
	//	} else {
	//		this.createUser('anythinger@gmail.com', 'prey-munk-baw-skag-stesk-soz-rost-steb-smeb-drint-frer-drak-bloct-jict-wusp-nid')
	//	}
	//	//console.log('auth: ', this.auth.currentUser)
	//	//return this.auth.currentUser
	//}

	//createUser(email, password) {
	//	this.auth.createUserWithEmailAndPassword(email, password)
   //   .catch(err => console.log('code: null, ', err.code, 'message', err.message))
	//}
	//
	//signInUser(email, password) {
	//	this.auth.signInWithEmailAndPassword(email, password)
	//}
}

export default new AuthService()
