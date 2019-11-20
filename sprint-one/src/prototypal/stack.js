var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var stack = Object.create(stackMethods);
	stack.count = 0;
	stack.storage = {};
	return stack
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value
  this.count++
};

stackMethods.pop = function() {
  var poped = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length-1]]
  delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length-1]]
  return poped
};

stackMethods.size = function() {
  return Object.keys(this.storage).length


};



