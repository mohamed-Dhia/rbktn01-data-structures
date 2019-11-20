class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 	constructor() {
  		this.count = 0;
		this.storage = {};
	}

  	push(value) {
    	this.storage[this.count] = value
    	this.count++
	}

	pop() {
    	var poped = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length-1]];
    	delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length-1]];
    	return poped
	}

	size() {
    	return Object.keys(this.storage).length;
	}
}

var newStack = new Stack();