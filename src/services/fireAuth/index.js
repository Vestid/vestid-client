import FireBase from '../'
import firebase from 'firebase'

export default class AuthService extends FireBase {
	constructor(options){
		super(options)
		FireBase.fireAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
		this.user = null
		console.log('this.user: ', this.user)
		//console.log('this.auth: ', this.auth)
		//console.log('firebase auth: ', FireBase.fireAuth)
		//FireBase.fireAuth.createUserWithEmailAndPassword('dallin.r.parker@gmail.com', 'testing')
		//	.then(user => {
		//	console.log('user: ', user)
		//}).catch(err => console.log('err: ', err))
		//this.auth = FireBase.getFireAuth()
		//this.app = FireBase.getAppRoot()
		////console.log('app: ', this.app)
		//console.log('this.auth: ', this.auth.setPersistence(this.app.auth.Auth.Persistence.LOCAL))
		//console.log('perse: ', this.auth.Auth.Persistence.LOCAL)
		//console.log('auth: ', this.auth.setPersistence())
		//this.user = FireBase.getUser()
	}

	static authListener() {
		super.fireAuth.onAuthStateChanged(user => {
			if (user) {
				console.log('current User: ', user)
				this.user = user;
			} else {
				console.log('no user found: ')
			}
		})
	}

	static loginUser(email, password, info = null) {
		super.fireAuth.signInWithEmailAndPassword(email, password)
			.then(loggedInUser => {
					console.log('logged in user: ', loggedInUser)
			}).catch(loginErr => console.log('loginErr: ', loginErr))
	}

	static signOutUser() {
		super.fireAuth.signOut()
			.then(user => console.log('user signed out: ', user))
			.catch(signOutErr => console.log('signOutErr: ', signOutErr))
	}

	static registerUser(email, password){
		super.fireAuth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
			.then(regUser => {
				console.log('regUser: ', regUser)
				const {user} = regUser
				console.log('user: ', user)
				console.log('emailVerified: ', user.emailVerified)
				this.sendVerificationEmail(user)

			})
			.catch(registerError => console.log('registerError: ', registerError))
	}

	static updateUserEmail(email) {
		super.fireAuth.updateEmail(email)
			.then(updated => console.log('email has been updated: ', updated))
			.catch(emailUpdateErr => console.log('emailUpdateErr: ', emailUpdateErr))
	}

	static updateUserPassword(newPassword) {
		//TODO: add user back as parameter
		this.user.updatePassword(newPassword)
			.then(success => console.log('password has been reset: ', success))
			.catch(updatePasswordErr => console.log('error updating password: ', updatePasswordErr))
	}

	static sendVerificationEmail(user) {
		//this needs to have a user from reducer?
		user.sendEmailVerification()
			.then(success => console.log('email was a success: ', success))
			.catch(emailErr => console.log('emailErr: ', emailErr))
	}
	
	static sendPasswordResetEmail(email) {
		super.fireAuth.sendPasswordResetEmail(email)
			.then(success => console.log('password reset email send: ', success))
			.catch(err => console.log('password reset email err: ', err))
	}

	static reauthenticatUser(user, credentials) {
		//credentials come from the the users sign-in email/password
		user.reauthenticateAndRetrieveDataWithCredential(credentials)
			.then(reAuthed => console.log('reAuthed success: ', reAuthed))
			.catch(reAuthErr => console.log('error re-authenticating: ', reAuthErr))
	}
}