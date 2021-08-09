let AdjacencyMatrixGraph = require("../public/js/class_lib/AdjacencyMatrixGraph")

test('add edge', ()=>{
	let graph = new AdjacencyMatrixGraph(5)
	graph.addEdge(2, 4)
})

test('add vertex', ()=>{
	let graph = new AdjacencyMatrixGraph(4)
	graph.addVertex()
	expect(graph.getVertices().length).toEqual(5)
	expect(graph.getVertices()[0].length).toEqual(5)
})

test('delete vertex', ()=>{
	let graph = new AdjacencyMatrixGraph(4)
	graph.addEdge(3, 4)
	graph.deleteVertex(3)
	expect(graph.getVertices().length).toEqual(3)
	expect(graph.getVertices()[0].length).toEqual(3)

})

// test('delete edge', ()=>{
// 	let graph = new AdjacencyMatrixGraph(4)
// 	graph.addEdge(1, 2)
// 	graph.addEdge(2, 3)
// 	graph.addEdge(3, 4)
// 	graph.deleteEdge(2, 3)
// 	expect(graph.getVertices().length).toEqual(3)
// 	expect(graph.getVertices()[0].length).toEqual(3)

// })