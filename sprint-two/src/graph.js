

// Instantiate a new graph
var Graph = function() {

	this.nodes = {};
	
	this.edge = [] ;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.nodes[node] = node 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	for (var key in this.nodes) {
		if(this.nodes[key] === node){
			return true;
		}
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
for(var key in this.nodes) {
	if(this.nodes[key] === node) {
			delete this.nodes[key]
			for(var i = 0 ; i < this.edge.length ; i++) {
				if(this.edge[i].includes(node)) {
					this.edge.splice(i, 1)
				} 
			}
	return 'deleted' 
	}
}
return 'node not found'
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	for(var i = 0 ;i< this.edge.length;i++) {
		if(this.edge[i].includes(fromNode) && this.edge[i].includes(toNode)){
			return true
		}
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.edge.push([fromNode, toNode])	;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	for(var i = 0 ; i < this.edge.length ; i++) {
		if(this.edge[i].includes(fromNode) && this.edge[i].includes(toNode)){
			this.edge.splice(i, 1);
		}
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var key in this.nodes) {
		cb(this.nodes[key]);
	}
};  
var newGraph = new Graph();
/*
 * Complexity: What is the time complexity of the above functions?
 */


