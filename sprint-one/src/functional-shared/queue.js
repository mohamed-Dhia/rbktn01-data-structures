var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var queue = {};
	queue.count = 0;
	queue.storage = {};
	_.extend(queue, queueMethods)
	return queue
};

var queueMethods = {};

//
  queueMethods.enqueue = function(value){
  	this.storage[this.count] = value 
  	this.count++
  	
  };

  queueMethods.dequeue = function(){
  	 var dequed = this.storage[Object.keys(this.storage)[0]]
  	 delete this.storage[Object.keys(this.storage)[0]]
  	 return dequed;
  };

  queueMethods.size = function(){
  	return Object.keys(this.storage).length;

  };



