class Stack{
	size = 0
	top = -1
	container = []
	constructor(size){
		this.size = size
	}

	push(data){
		if(this.top >= this.size){
			return "Stack overflow"
		}
		this.container[++this.top] = data
		return "Item added successfully"
	}

	pop(){
		if(this.top < 0){
			return "Stack underflow"
		}
		let temp = this.container[this.top]
		this.container[this.top] = null
		this.top--
		return temp
	}

	peek(){
		return this.container[this.top]
	}
}

module.exports = Stack