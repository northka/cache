let Data = require('./data')
module.exports = class MapCache{
	constructor(){
		this.collection = new Map()
	}
	getData(key){
		if(typeof key === 'string'){
			let item = this.collection.get(key)
			if(item.isOutDate()){
				return item.value
			}else{
				return undefined
			}
		}
	}
	addData(key, value, opt){
		let keyName, keyValue, option
		if(typeof key === 'string'){
			keyName  = key
			keyValue = value
			option   = opt
		}
		if(key !== null && typeof key === 'object'){
			keyName = key.key,
			value   = key.value,
			option  = key.opt
		}
		let data = new Data(value, opt)
		this.collection.set(key, data)
	}
	deleteData(key){
		this.collection.delete(key)
	}
	hasData(key){
		this.collection.has(key)
	}
	isOutDate(key){
		let data = this.collection.get(key)
		return data.isOutDate()
	}
}