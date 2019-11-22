var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	if(!this.storage[item]) {
		this.storage[item] = item
	}
	return 'already there'
};

setPrototype.contains = function(item) {
	if(this.storage[item]){
		return true
	}
	return false ;
};

setPrototype.remove = function(item) {
	if(this.storage[item]) {
		delete this. storage[item]
	}
	return 'item not found'
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
