const BinarySearchTree = require("./BinarySearchTree")
const Stack = require('./Stack')


//Should be gotten from BST
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

class AVLTree extends BinarySearchTree{
	constructor(data){
		super(data)
		this._root.balanceFactor = 0
		//console.log(this._root)
	}

	insert(data){
		let current = this._root
		let ancestors = []
		while(current){
			ancestors.push(current)
			if(data < current.data){
				if(current.left === null){
					current.left = new Node(data)
					current.left
					break
				}else{
					current = current.left
				}
			}else{
				if(current.right === null){
					current.right = new Node(data)
					current.right
					break
				}else{
					current = current.right
				}
			}
		}
		//console.log(data)
		//console.log(ancestors)
		//TODO: extract into a function. Same code in deletion
		for(let i=ancestors.length - 1; i>= 0; i--){
			//console.log(this.calculateBalanceFactor(ancestors[i]))
			//Check if node is balanced
			if(this.calculateBalanceFactor(ancestors[i]) > 1 || this.calculateBalanceFactor(ancestors[i]) < -1){
				if(ancestors[i].right && data > ancestors[i].right.data){//console.log(ancestors[i])
					this.leftRotate(ancestors[i])
				}
				else if(ancestors[i].right && data < ancestors[i].right.data){
					this.rigthLeftRotate(ancestors[i])
				}
				else if (data < ancestors[i].left.data) {//console.log(ancestors[i])
					this.rightRotate(ancestors[i])
					//console.log(this._root)
				}else if (data > ancestors[i].left.data) {//console.log(ancestors[i])
					this.leftRightRotate(ancestors[i])
					this._root
				}
			}
		}
	}

	delete(item){
		//Search for item to be deleted
		let ancestors = [] //Keeping track of ancestor to facilitate re-balancing after deletion
		let parent = this._root
		let current = this._root
		while(current !== null){
			if(item > current.data){
				ancestors.push(current)
				parent = current
				current = current.right
			}else if(item < current.data){
				ancestors.push(current)
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

		//TODO: extract into a function. Same code in insertion
		for(let i=ancestors.length - 1; i>= 0; i--){
			//console.log(this.calculateBalanceFactor(ancestors[i]))
			//Check if node is balanced
			if(this.calculateBalanceFactor(ancestors[i]) > 1 || this.calculateBalanceFactor(ancestors[i]) < -1){
				if(ancestors[i].right && data > ancestors[i].right.data){//console.log(ancestors[i])
					this.leftRotate(ancestors[i])
				}
				else if(ancestors[i].right && data < ancestors[i].right.data){
					this.rigthLeftRotate(ancestors[i])
				}
				else if (data < ancestors[i].left.data) {//console.log(ancestors[i])
					this.rightRotate(ancestors[i])
					//console.log(this._root)
				}else if (data > ancestors[i].left.data) {//console.log(ancestors[i])
					this.leftRightRotate(ancestors[i])
					this._root
				}
			}
		}
	}

	calculateBalanceFactor(node){
		return this.calculateHeight(node.left) - this.calculateHeight(node.right)
	}

	calculateHeight(node){
		//console.log(super.inorder(node))
		if(node == null){
			return 0
		}else{
			let left = this.calculateHeight(node.left)
			let right = this.calculateHeight(node.right)
			//console.log(node.left, left, node.right, right)
			return (left > right) ? left + 1 : right + 1
		}
	}

	leftRotate(node){
		let temp = node
		node.left = new Node(temp.data)
		node.data = temp.right.data
		node.right = temp.right.right
		return node
	}

	leftRightRotate(node){
		node.left = this.leftRotate(node.left)
		return this.rightRotate(node)
	}

	rightRotate(node){
		// let newRoot = node.left
		// node.left = null
		// newRoot.right = node
		// return newRoot

		let temp = node
		node.right = new Node(temp.data)
		node.data = temp.left.data
		node.left = temp.left.left
		return node
	}

	rigthLeftRotate(node){
		node.right = this.rightRotate(node.right)
		return this.leftRotate(node)
	}
}

module.exports = AVLTree