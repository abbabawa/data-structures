const BinarySearchTree = require("./BinarySearchTree")
const Stack = require('./Stack')
class AVLTree extends BinarySearchTree{
	constructor(data){
		super(data)
		this._root.balanceFactor = 0
		//console.log(this._root)
	}

	insert(tree, data){
		// let node = super.insert(data)
		// node.balanceFactor = 0
		// colet node = super.insert(data)
		node.balanceFactor = 0
		//console.log(this.calculateBalanceFactor(this._root))
		//console.log(this.calculateHeight(this._root))
		//console.log(node)
		let current = this._root
		let stopCondition = true
		do{console.log(current.data, node.data)
			if(current.data === node.data){
				stopCondition = false
			}
			let bf = 0
			//console.log(bf = this.calculateBalanceFactor(current), current.data)
			bf = this.calculateBalanceFactor(current)
			current.balanceFactor = bf
			if(bf > 1 && this.calculateBalanceFactor(current.left) === 1){
				//right rotate
				
			}
			else if(bf < -1 /*&& this.calculateBalanceFactor(current.right) === 1*/){
				//left rotate
				current = this.leftRotate(current)
				console.log(current)
			}else if (bf < -1 && this.calculateBalanceFactor(current.right) === 1) {
				//Right left rotate
			}else if(bf > 1 && this.calculateBalanceFactor(current.left) === -1){
				//Left right rotate
			}

			if(current.data > node.data){
				current=current.left
			}else if(current.data < node.data){
				current = current.right
			}
			console.log(current, node)
		}while(stopCondition)
		console.log("End")
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
		let newRoot = node.right
		node.right = null
		newRoot.left = node
		return newRoot
	}

	leftRightRotate(node){
		node.left = this.leftRotate(node.left)
		return rightRotate(node)
	}

	rightRotate(node){
		let newRoot = node.left
		node.left = null
		newRoot.right = node
		return newRoot
	}

	rigthLeftRotate(node){
		node.right = this.rightRotate(node.right)
		return leftRotate(node)
	}
}

module.exports = AVLTree