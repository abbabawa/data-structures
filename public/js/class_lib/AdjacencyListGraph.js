const List = require("./LinkedList")
const Queue = require("./Queue")
const Stack = require("./Stack")

class Vertex{
    name
    list //List of adjacent vertices
    constructor(name){
        this.name = name
        this.list = new List()
    }
}

//The adjacencyList implementation of a graph makes use of an array of linked lists
//Each node(vertex) in the graph holds a list of nodes adjacent to it
class AdjacencyListGraph{
	container = []
	constructor(){
		//this.list = new LinkedList()
	}

	addVertex(name){
		this.container[this.container.length] = new Vertex(name)
		return this.container[this.container.length -1]
	}

	deleteVertex(name){
		//let vertex = this.container.find(val=>{return val.name === name})
		for(let i=0; i<this.container.length; i++){
			let pos = this.container[i].list.search(name)
			if(pos > 0){
				this.container[i].list.deleteNode(name)
			}
		}
		for(let i=0; i<this.container.length; i++){
			if(this.container[i].name == name){
				let j=i
				for(; j + 1<this.container.length; j++){
					this.container[j] = this.container[j + 1]
				}
				this.container.pop() //remove last vertex to avoid duplication
			}
		}
	}

	addEdge(vertex1, vertex2){
		let check1 = this.container.findIndex(val=>{return val.name === vertex1})
		let check2 = this.container.findIndex(val=>{return val.name === vertex2})
		
		if (check1 >= 0 && check2 >= 0) {
			this.container[check1].list.insertAtTail(vertex2)
			this.container[check2].list.insertAtTail(vertex1)
			//console.log(this.container)
			return "Edge added successfully"
		}else{
			return "Could not add edge"
		}
	}

	deleteEdge(start, stop){
		for(let i=0; i<this.container.length; i++){
			if(this.container[i].name === start){
				this.container[i].list.deleteNode(stop)
			}else if(this.container[i].name === stop){
				this.container[i].list.deleteNode(start)
			}
		}
	}

	displayVertex(name){
		let vertex = this.container.find(val=>{return val.name === name})
		if(vertex){
			return {
				name: vertex.name,
				edges: vertex.list.getListItems()
			}
		}else{
			return null
		}
	}

	getVertices(){
		let vertices = []
		for(let i=0; i<this.container.length; i++){
			vertices[i] = {
				name: this.container[i].name,
				edges: this.container[i].list.getListItems()
			}
		}
		return vertices
	}

	//Unconnected vertices are not visited
	breadthFirstSearch(){
		let visited = []
		let queue = new Queue()

		let current = this.container[0]
		while(current !== null){
			//Check if current vertex has already been visited
			if(visited.findIndex(val=>{return val === current.name}) < 0){
				visited[visited.length] = current.name
				let items = current.list.getListItems()
				for(let i=0; i<items.length; i++){
					queue.enqueue(items[i])
				}
			}
			let next = queue.dequeue()

			current = (next === "Queue is empty") ? null : this.container.find(val=>{return val.name === next})
		}
		return visited
	}


	//Doesnt visit unconnected vertices
	depthFirstSearch(){
		let visited = []
		let stack = new Stack()

		let current = this.container[0]
		while(current !== null){
			//Check if current vertex has already been visited
			if(visited.findIndex(val=>{return val === current.name}) < 0){
				visited[visited.length] = current.name
				let items = current.list.getListItems()
				for(let i=0; i<items.length; i++){
					stack.push(items[i])
				}
			}
			let next = stack.pop()

			current = (next === "Stack underflow") ? null : this.container.find(val=>{return val.name === next})
		}
		return visited
	}

}


module.exports = AdjacencyListGraph