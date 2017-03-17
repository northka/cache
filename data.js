module.exports = class Data{
	constructor(value, opt){
		this.value = value
		if(null !=== opt && typeof opt === 'object')
	}
	configureOption(opt){

	}
	set expire(value){
		this.expire = value
	}
	get expire(){
		return this.expire > 0 ? this.expire : 0
	}
	isOutDate(){
		return this.expire > 0 ? this.expire < Date.now() : false
	}
}