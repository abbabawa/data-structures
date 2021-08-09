const Graph = require('../public/js/class_lib/AdjacencyListGraph')

test('add vertex', ()=>{
	let graph = new Graph()
	expect(graph.addVertex("C").name).toBe("C")
	expect(graph.addVertex("A").name).toBe("A")
})

test('delete vertex', ()=>{
	let graph = new Graph()
	graph.addVertex("C")
	graph.addVertex("A")
	graph.addVertex("D")
	graph.deleteVertex("A")
	expect(graph.displayVertex("A")).toBe(null)

})

test('add edge', ()=>{
	let graph = new Graph()
	graph.addVertex("C")
	graph.addVertex("A")
	expect(graph.addEdge("A", "B")).toEqual("Could not add edge")
	graph.addVertex("B")
	expect(graph.addEdge("A", "B")).toEqual("Edge added successfully")
})

test('delete edge', ()=>{
	let graph = new Graph()
	graph.addVertex("C")
	graph.addVertex("A")
	graph.addVertex("B")
	graph.addEdge("A", "B")
	graph.addEdge("A", "C")
	graph.deleteEdge("A", "B")
	//console.log(graph.getVertices().find(val=>{return val.name === "A"}).list)
	expect(graph.getVertices()
		.find(val=>{return val.name === "A"})
		.edges.findIndex(val=>{return val==="B"}))
	.toBeLessThan(0)
})

test('display vertex', ()=>{
	let graph = new Graph()
	graph.addVertex("C")
	graph.addVertex("A")
	expect(graph.displayVertex("C").name).toBe("C")
	expect(graph.displayVertex("D")).toBe(null)
})


test('get vertices', ()=>{
	let graph = new Graph()
	graph.addVertex("C")
	graph.addVertex("A")
	graph.addVertex("B")
	graph.addEdge("A", "C")
	graph.addVertex("D")
	graph.addEdge("A", "B")
	graph.addEdge("B", "D")
	let vertices = graph.getVertices()
	expect(vertices.findIndex(val=>{return val.name==="A"})).toBeGreaterThanOrEqual(0)
	expect(vertices.length).toEqual(4)
})


test('breadth first search', ()=>{
	let graph = new Graph()
	graph.addVertex("A")
	graph.addVertex("B")
	graph.addVertex("C")
	graph.addEdge("A", "B")
	graph.addVertex("D")
	graph.addEdge("A", "C")
	graph.addEdge("B", "D")
	graph.addVertex("E")
	graph.addEdge("B", "E")
	graph.addVertex("F")
	graph.addEdge("C", "F")
	graph.addVertex("G")
	let vertices = graph.breadthFirstSearch()
	//console.log(vertices)
	let order = ["A", "B", "C", "D", "E", "F"]
	for(let i=0; i<vertices.length; i++){
		expect(vertices[i]).toBe(order[i])
	}
})

test('breadth first search', ()=>{
	let graph = new Graph()
	graph.addVertex("A")
	graph.addVertex("B")
	graph.addVertex("C")
	graph.addEdge("A", "B")
	graph.addVertex("D")
	graph.addEdge("A", "C")
	graph.addEdge("B", "D")
	graph.addVertex("E")
	graph.addEdge("B", "E")
	graph.addVertex("F")
	graph.addEdge("C", "F")
	graph.addVertex("G")
	let vertices = graph.depthFirstSearch()
	//console.log(vertices)
	let order = ["A", "C", "F", "B", "E", "D"]
	for(let i=0; i<vertices.length; i++){
		expect(vertices[i]).toBe(order[i])
	}
})