import FireBase from '../'

class FireStoreService {
	constructor() {
		this.db = FireBase.getFireStore()
		console.log('Store DB: ', this.db)
	}

}
export default new FireStoreService()