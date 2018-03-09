import FireBase from '../'
import firebase from 'firebase'

class AuthService {
	constructor(){
		FireBase.fireAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
		FireBase.fireAuth.createUserWithEmailAndPassword('dallin.r.parker@gmail.com', 'testing')
			.then(user => {
			console.log('user: ', user)
		})
		//this.auth = FireBase.getFireAuth()
		//this.app = FireBase.getAppRoot()
		////console.log('app: ', this.app)
		//console.log('this.auth: ', this.auth.setPersistence(this.app.auth.Auth.Persistence.LOCAL))
		//console.log('perse: ', this.auth.Auth.Persistence.LOCAL)
		//console.log('auth: ', this.auth.setPersistence())
		//this.user = FireBase.getUser()
	}

	authListener(){
		//this.auth.onAuthStateChanged(user => {
		//	console.log('user: ', user)
		//})
	}


}

//`FireBase.firebase.auth().setPersistence(FireBase.firebase.auth.Auth.Persistence.LOCAL)`
export default new AuthService()
