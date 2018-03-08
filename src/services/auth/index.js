import {FireBase} from '../'
import options from '../config'

class AuthService extends FireBase{
	constructor(options){
		super(options)
		this.auth = super.getFireAuth()
	}
}

export default new AuthService(options)
