var BinarySearchTree = function(array, value, start, end) {
	var start = start || 0 ;
	var end = end || array.length-1
	var middle =  Math.floor(array.length/2)
	if(value === array[middle]) {
		return middle;
	}
	if(value > array[middle]) {
		return BinarySearchTree(array, value, middle, end)
	}
	if(value < array[middle]) {
		return BinarySearchTree(array, value, start, middle)
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
