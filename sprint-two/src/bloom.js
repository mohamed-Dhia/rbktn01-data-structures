class BloomFilter  {
	constructor (limit, hashingTimes) {
		this._limit = limit;
		this._strotage = []; 
		this._hashingTimes = hashingTimes;
	}
	add(value) {
		this.each((i)=>{

			this._strotage[this.megaUltimateHasher(value, i * 2)] = 1
		}) 
	}

	check(value) {
	    var state = true;
		this.each((i)=>{
			if(!this._strotage[this.megaUltimateHasher(value, i * 2)]){
				state = false;
				return true;
			}
		})
		return state;
		}

	each(callBack = () => {}) {
		for(var i = 0; i < this._hashingTimes; i++) {
			if(callBack(i))
				break;
		}
	}

	megaUltimateHasher(value, hashKey) {
		value+= hashKey
		var hash = 0;
		for (var i = 0; i < value.length; i++) {
		  hash = (hash << 5) + hash + value.charCodeAt(i)
		  hash = hash & hash; // Convert to 32bit integer
		  hash = Math.abs(hash);
		}
		return hash % this._limit;
	}
}