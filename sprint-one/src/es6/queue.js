class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 	constructor() {
  		this.count = 0;
		this.storage = {};
	}

  	enqueue(value) {
  		this.storage[this.count] = value 
  		this.count++	
	}

	dequeue() {
    	var dequed = this.storage[Object.keys(this.storage)[0]];
  		delete this.storage[Object.keys(this.storage)[0]];
  		return dequed;
	}

	size() {
    	return Object.keys(this.storage).length;
	}
}

var newQueue = new Queue();