var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
  	storage[key] = value 
  	key++
  	
  };

  someInstance.dequeue = function() {
  	 var dequed = storage[Object.keys(storage)[0]]
  	 delete storage[Object.keys(storage)[0]]
  	 return dequed;
  };

  someInstance.size = function() {
  	return Object.keys(storage).length;

  };
  return someInstance;
};
