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
		for(let i=ancestors.length - 1; i>= 0; i--){
			//console.log(this.calculateBalanceFactor(ancestors[i]))
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