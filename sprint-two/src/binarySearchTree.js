class Bts {
	constructor (value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.parent = null
		this.n = 1;
	}
	insert (value) {
		this.n++;
		var child = new Bts(value);
		child.parent = this;
		(this.value > value) ? (!this.left? this.left = child : this.left.insert(value)) : (!this.right? this.right = child : this.right.insert(value)) 
		if(!this.checkBalance()){
			this.traverse(function(context){
				if(!context.checkBalance())
					context.rebalance()

				
			})
			console.log('rebalanced')
			}
	}
	checkBalance() {
		var max = 0;
		var depth = -1;

		this.traverse(function(node){
			if(!(node.left || node.right))
				if(max < depth)
					max = depth
			depth--;
		},function(){
			depth++;
		})
		if(Math.log2(this.n) < max)
			return false;
		return true	;
	}

	traverse(callback, counter = () => {})  {
		counter()
		if(!!this.left)
			this.left.traverse(callback, counter)
		if(!!this.right)
			this.right.traverse(callback, counter)	
		callback(this);
	}

rebalance(){
	var countLeft = 0;
	var countRight = 0;
	if(this.right)
		this.right.traverse(function(){
			countRight++;
		})
	if(this.left)
		this.left.traverse(function(){
			countLeft++;
		})

	if(countRight>countLeft){
		var direction = 'right';
		var opp = 'left';
	}else{
		var direction = 'left';
		var opp = 'right';
	}
	var holder = this[direction];
	this[direction] = holder[opp];
	if(this.value > this.parent.value)
		this.parent.right = holder;
	else
		this.parent.left = holder;
	holder[opp] = this;
	return holder;			
	}
}

var b = new Bts(5);
b.insert(6)
b.insert(4)
b.insert(1)

/* isbalanced

declare min and max depth 
	fun that traverse tree
		take parametre node and depth 
		check if left or right = nothing 
			update min and max with depth
		call main fun on left and right 

	call fun that traverse that take curent node and zero

*/
