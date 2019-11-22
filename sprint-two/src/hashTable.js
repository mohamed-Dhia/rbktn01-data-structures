

var HashTable = function() {
  this.limit = 8;
  this.storage = LimitedArray(this.limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  this.storage.set(k,index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  return this.storage.get(k,index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);  
  this.storage.each(function(element, i, storage){
  	delete storage[index][k];
  })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


   