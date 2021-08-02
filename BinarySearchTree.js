const Stack = require('./Stack')
class Node{
	data
	left
	right
	constructor(data){
		this.data = data
		this.left = null
		this.right = null
	}
}

class BinarySearchTree{
	#root
	constructor(data){
		this._root = new Node(data)
	}

	insert(data){
		let current = this._root
		while(current){
			if(data < current.data){
				if(current.left === null){
					current.left = new Node(data)
					return current.left
				}else{
					current = current.left
				}
			}else{
				if(current.right === null){
					current.right = new Node(data)
					return current.right
				}else{
					current = current.right
				}
			}
		}
	}

	search(key){
		let current = this._root
		while(current !== null){
			if(key == current.data){
				return true
			}else if(key < current.data){
				current = current.left
			}else{
				current = current.right
			}
		}
		return false
	}

	delete(item){
		//Search for item to be deleted
		let parent = this._root
		let current = this._root
		while(current !== null){
			if(item > current.data){
				parent = current
				current = current.right
			}else if(item < current.data){
				parent = current
				current = current.left
			}else{
				break
			}
		}

		//Node has no children
		if (current.left === null && current.right === null) {
			parent.data > item ? parent.left = null : parent.right = null
		}
		//Node has left child
		else if (current.left === null && current.right !== null) {
			parent.data > item ? parent.left = current.right : parent.right = current.right
		}
		//Node has right child
		else if (current.left !== null && current.right === null) {
			parent.data > item ? parent.left = current.left : parent.right = current.left
		}
		//Node has two children
		else if(current.left !== null && current.right !== null){
			let smallest = current.right
			let prev = current
			while(smallest.left !== null || smallest.right !== null){
				prev = smallest
				smallest.left === null ? smallest = smallest.right : smallest = smallest.left
			}
			current.data = smallest.data
			prev.left === smallest.data ? prev.left = null : prev.right = null
		}
			
	}

	inOrderPredecessor(node){
		let current = node
		let values = []
		let stack = new Stack() //Stack to help us keep track of items we are yet to process
		while(current !== 'Stack underflow' && current !== null){
			if(values.findIndex(val=>{return val === current.data}) < 0){
				if(current.right !== null)
					stack.push(current.right)
				if(current.left !== null && values.findIndex(val=>{return val.data === current.left.data}) < 0){
					stack.push(current)
					stack.push(current.left)
				}
				else
					values.push(current)
			}
			current = stack.pop()
		}
		
		for(let i = 0; i<values.length; i++){
			if(values[i].data === node.data)
				return values[i + 1]
		}
	}

	preorder(){
		let current = this._root
		let values = []
		let stack = new Stack()
		while(current !== "Stack underflow"){
			if(values.findIndex(val=>{return val === current.data}) < 0){
				values.push(current.data)
				if(current.right !== null)
					stack.push(current.right)
				if(current.left !== null)
					stack.push(current.left)
			}
				current = stack.pop()
		}
		return values
	}

	inorder(node=this._root){
		let current = node
		let values = []
		let stack = new Stack() //Stack to help us keep track of items we are yet to process
		while(current !== 'Stack underflow' && current !== null){
			if(values.findIndex(val=>{return val === current.data}) < 0){
				if(current.right !== null)
					stack.push(current.right)
				if(current.left !== null && values.findIndex(val=>{return val === current.left.data}) < 0){
					stack.push(current)
					stack.push(current.left)
				}
				else
					values.push(current.data)
			}
			current = stack.pop()
		}
		return values
	}

	postorder(){
		let current = this._root
		let values = []
		let stack = new Stack() //Stack to help us keep track of items we are yet to process
		while(current !== 'Stack underflow' && current !== null){
			if(values.findIndex(val=>{return val === current.data}) < 0){
				if(current.right !== null)
					stack.push(current)
					stack.push(current.right)
				if(current.left !== null && values.findIndex(val=>{return val === current.left.data}) < 0){
					stack.push(current.left)
				}
				else
					values.push(current.data)
			}
			current = stack.pop()
		}
		return values
	}
}

module.exports = BinarySearchTree