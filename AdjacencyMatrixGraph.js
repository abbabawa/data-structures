
class AdjacencyMatrixGraph{
	#container
	constructor(size){
		this.#container = []
		for(let i=0; i<size; i++){
			this.#container[i] = []
			for(let j=0; j<size; j++){
				this.#container[i].push(0)
			}
		}
	}

	addEdge(start, end){
		this.#container[start - 1][end - 1] = 1
		this.#container[end - 1][start - 1] = 1
	}

	addVertex(){
		this.#container.push([])
		//Add a zero to each vertex to represent no connection between it and the newly added vertex
		for(let i=0; i<this.#container.length - 1; i++){
			this.#container[i].push(0)
		}

		//set the new vertex values to zero to signify it has no connection with other
		//vertices yet
		let max = this.#container.length
		for(let i=0; i<this.#container.length; i++){
			this.#container[max-1].push(0)
		}
	}

	deleteVertex(position){
		if(position-1 > this.#container.length){
			return -1
		}
		
		for(let i=position - 1; i<this.#container.length; i++){
			this.#container[i] = this.#container[i+1]
		}
		this.#container.pop()

		for(let i=0; i<this.#container.length; i++){
			for(let j=position - 1; j<this.#container[i].length; j++){
				this.#container[i][j] = this.#container[i][j+1]
				//console.log( this.#container[j+1])
			}
			this.#container[i].pop()
		}
	}

	getVertices(){
		return this.#container
	}
}

module.exports = AdjacencyMatrixGraph