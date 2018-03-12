import FireBase from '../'
import firebase from 'firebase'

export default class AuthService extends FireBase {
	constructor(options){
		super(options)
		FireBase.fireAuth.setPersistence(firebase.auth.Auth.Persistence.NONE)
	}

	static getUser() {
		return super.user()
	}

	static authListener() {
		super.fireAuth.onAuthStateChanged(user => {
			if (user) {
				console.log('current User: ', user)
			} else {
				console.log('no user found: ')
			}
		})
	}

	static signInUser(email, password) {
		return super.fireAuth.signInWithEmailAndPassword(email, password)
			.catch(loginErr => loginErr)
	}

	static signOutUser() {
		//AuthService.actions.updateAuthInfo({name: 'dallin'})
		//super.fireAuth.signOut()
		//	.then(user => console.log('user signed out: ', user))
		//	.catch(signOutErr => console.log('signOutErr: ', signOutErr))
	}

	static registerUser(email, password){
		return super.fireAuth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
			.then(({user}) => (user))
			.catch(registerError => registerError)
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
