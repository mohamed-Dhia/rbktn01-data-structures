var Stack = function() {
	// Hey! Rewrite in the new style. Your code will wind up looking very similar,
	// but try not not reference your old code in writing the new style.
	this.count = 0;
	this.storage = {};
};

Stack.prototype.push = function(value) {
    this.storage[this.count] = value
    this.count++
};

Stack.prototype.pop = function() {
    var poped = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length-1]];
    delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length-1]];
    return poped
};

Stack.prototype.size = function() {
    return Object.keys(this.storage).length;
};

var newStack = new Stack();