var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value
    count++
  };

  someInstance.pop = function() {
    var poped = storage[Object.keys(storage)[Object.keys(storage).length-1]]
    delete storage[Object.keys(storage)[Object.keys(storage).length-1]]
    return poped
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
