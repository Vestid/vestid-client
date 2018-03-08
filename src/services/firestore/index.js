import {FireBase} from '../'
import options from '../config'

class FireStoreService extends FireBase {
	constructor(options) {
		super(options)
		this.db = super.getFireStore()
	}

}

export default new FireStoreService(options)