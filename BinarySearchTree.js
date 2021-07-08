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
		this.#root = new Node(data)
	}

	insert(data){
		let current = this.#root
		while(current){
			if(data < current.data){
				if(current.left === null){
					current.left = new Node(data)
					return
				}else{
					current = current.left
				}
			}else{
				if(current.right === null){
					current.right = new Node(data)
					return
				}else{
					current = current.right
				}
			}
		}
	}

	search(key){
		let current = this.#root
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

	//Todo: Complete delete function. deleting node with two children
	delete(item){
		let parent = this.#root
		let current = this.#root
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
		
		//If node has no children just set parent pointer to null
		if(current.left === null && current.right === null){
			if(parent.left.data === item)
				parent.left = null
			else
				parent.right = null
			return
		}else if((current.left !== null && current.right === null)){
			if(parent.left.data === item)
				parent.left = current.left
			else
				parent.right = current.left
			return
		}else if((current.right !== null && current.left === null)){
			if(parent.left.data === item)
				parent.left = current.right
			else
				parent.right = current.right
			return 
		}else{
			//If node has two children
			//console.log(parent)
			let predecessor = this.inOrderPredecessor(current)

			if(parent.left.data === item)
				parent.left = predecessor
			else
				parent.right = predecessor

			let temp 
			if(predecessor.left === null){
				temp = predecessor
			}else{
				temp = predecessor.left
			}
			
			while(temp !== null){
				if(temp.left === null)
					break
				temp = temp.left
			}
			temp.left = current.left
			return
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
		let current = this.#root
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

	inorder(){
		let current = this.#root
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
		let current = this.#root
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