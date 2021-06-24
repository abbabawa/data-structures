class Queue{
	size = 0
	front = -1
	rear = -1
	container = []

	constructor(size){
		if(size > 0)
			this.size = size
	}

	enqueue(data){
		//Check if adding data will cause an overflow
		if ((this.rear + 1) >= this.size) {
			return "Queue is full"
		}
		if (this.front < 0) {
			this.front++
		}
		this.container[++this.rear] = data
		return "Item added successfully"
	}

	dequeue(){
		if(this.rear < 0){
			return "Queue is empty"
		}
		let temp = this.container[this.front]
		for(let i=0; (i + 1) < this.container.length; i++){
			let hold = 0
			this.container[i] = this.container[i + 1]
		}
		this.container[this.rear] = null //make sure last index is empty
		this.rear--
		return temp
	}

	peek(){
		if (this.front < 0) {
			return "Queue is empty"
		}
		return this.container[this.front]
	}

	isEmpty(){
		if (this.rear < 0) {
			return true
		}else{
			return false
		}
	}

	isFull(){
		//Rear starts from 0 (in order to index array properly) so 1 is added to compensate for that
		if ((this.rear + 1) >= this.size) {
			return true
		}else{
			return false
		}
	}
}

module.exports = Queue