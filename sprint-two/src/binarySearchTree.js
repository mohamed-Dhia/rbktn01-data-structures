// var BinarySearchTree = function(array, value, start, end) {
// 	var start = start || 0 ;
// 	var end = end || array.length-1
// 	var middle =  Math.floor(array.length/2)
// 	if(value === array[middle]) {
// 		return middle;
// 	}
// 	if(value > array[middle]) {
// 		return BinarySearchTree(array, value, middle, end)
// 	}
// 	if(value < array[middle]) {
// 		return BinarySearchTree(array, value, start, middle)
// 	}
// };


/*
 * Complexity: What is the time complexity of the above functions?
 */
var BinarySearchTree = function(value) {
	var binaryTree = {} ;
	binaryTree.value = value; 
	binaryTree.left;
	binaryTree.right;
	binaryTree.insert = insert;
	binaryTree.contains = contains;
	binaryTree.depthFirstLog = depthFirstLog;
	return binaryTree;
};
var  insert = function (value){
	var newNode = newNode || BinarySearchTree(value);
	if(this.value > value){
		if(this.left) {
			return this.left.insert(value)
		}
		this.left = newNode;
	} else {
		if(this.right) {
			return this.right.insert(value)
		}
		this.right = newNode;
	}
}
var  contains = function (target){
	if(target === this.value){
		return true
	}
	if(target > this.value){
		if(!this.right.value){
			return false
		}
		return this.right.contains(target)
	} else {
		if(!this.left.value) {
			return false
		}
		return this.left.contains(target)
	}

}
var  depthFirstLog = function (){}
