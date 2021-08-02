let Queue = require("./Queue")

class Node{
	data
	children
	isWord
	constructor(data){
		this.data = data
		this.children = []
		this.isWord = false
	}
}

class Trie{
	#root
	constructor(){
		this.#root = new Node('')
	}

	insert(word){
		let chars = word.split("")
		let current = this.#root
		for(let i=0; i<chars.length; i++){
			let index = current.children.findIndex(val=>{return val.data === chars[i]})
			if(index < 0){//console.log(current.data, current.children, chars[i])
				current.children.push(new Node(chars[i]))
				index = current.children.length - 1
			}
			current = current.children[index]
		}
	}

	search(word){
		let current = this.#root
		let chars = word.split("")
		//Go through the nodes of the trie starting from the root
		//Root is empty so we won't check root
		for(let i=0; i<chars.length; i++){
			//for each node check if the current character is part of its children
			let index = current.children.findIndex(val=>{return val.data === chars[i]})
			if(index >= 0){
				//If character is part of its children we keep the search going by setting the child node containing the character to be the current node
				current = current.children[index]
			}else{
				//If character is not part of its children we can end the search because this means the word is not in the trie
				return word+" not found in trie"
			}
		}
		return word+" found in trie"
	}

	print(){//display contents of trie using breadth first search (preorder)
		let current = this.#root
		let values = []
		let queue = new Queue()
		while(current !== "Queue is empty" && current !== undefined){
			//if(values.findIndex(val=>{return val === current.data}) < 0){
				values.push(current.data)
				//console.log(current.data, current.children)
				for(let i=0; i<current.children.length; i++){
					queue.enqueue(current.children[i])
				}
			//}
				current = queue.dequeue()
		}
		//console.log(values)
	}
}

module.exports = Trie