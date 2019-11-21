var LinkedList = function() {
  
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
      var obj = Node(value)
      if(!list.head) {
        list.head = obj
      }
      if(list.tail === list.head){
          list.head.next = obj
      }      
    if(list. tail){
      list.tail.next = obj
    }

      list.tail = obj
 
  };

  list.removeHead = function() {
    var removedHead = list.head.value; 
    list.head = list.head.next;
    return removedHead;
  };

  list.contains = function(target) {
    function find(obj){
      if (obj.value === target){
        return true;
      }
      if(!obj.next){
        return false;
      }
      return find(obj.next);
    }
    return find(list.head)
  }
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
