import FireBase from '../'

class FireStoreService {
	constructor() {
		this.db = FireBase.getFireStore()
		console.log('Store DB: ', this.db)
	}

	checkUID(user, uid) {
		console.log('checkUID user: ', user)
		console.log('checkUID uid: ', uid)
		this.db.collection('users').doc(`${uid}`).set({firstname: 'anything', lastname: 'parker'}, {merge: true})

		//	.set({
		//	firstName: 'dinner',
		//	//lastname: 'parker'
		//}, {merge: true})
		//this.db
		//let collection = this.db.doc('users/a').get()
		//	.then(docs => {
		//		if(docs.exists){
		//			docs.set({
		//				firstname: 'Dallin'
		//			})
		//		}
		//	})
		//let usersCollection = this.db.doc(`users/${uid}`).get()
		//	.then(docs => {
		//		console.log('docs: ', docs.data())
		//		if(docs.exists) {
		//			console.log('document exists: ', docs.metadata)
		//		} else {
		//			docs.set({id: uid, name: 'dallin parker'})
		//				.then(() => console.log('saved!: '))
		//				.catch(err => console.log('error: ', err))
		//		}
		//	})
		//console.log('usersCollection: ', usersCollection)
		//let usersCollection = this.db.collection('users').get()
		//	.then(documents => {
		//		documents.docs.forEach(e => console.log('e: ', e))
		//	})
		//console.log('usersCollection: ', usersCollection)

		//usersCollection.where('name', '==', 'dallin').get()
		//	.then(docs => {
		//		console.log('docs: ', docs)
		//		docs.forEach(e => {
		//			console.log('property: ', e)
		//			console.log('name: ', e.get('dallin'))
		//		})
		//	})
		//let docID = usersCollection
		//console.log('docID: ', docID)
		//const userExist = usersCollection.where(`${uid}`, '==', `${}`)

	}

}
export default new FireStoreService()