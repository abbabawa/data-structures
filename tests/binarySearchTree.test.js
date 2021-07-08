const Tree = require("../BinarySearchTree")

test('insert', ()=>{
	let tree = new Tree(10)
	tree.insert(3)
	tree.insert(12)
	tree.insert(1)
	tree.insert(15)
	tree.insert(4)
	tree.insert(11)
	//console.log(tree.preoder())
})

test('search', ()=>{
	let tree = new Tree(12)
	tree.insert(3)
	tree.insert(82)
	tree.insert(19)
	tree.insert(22)
	expect(tree.search(3)).toEqual(true)
	expect(tree.search(77)).toEqual(false)
})

test('pre Order Traversal', ()=>{
	let tree = new Tree(10)
	tree.insert(3)
	tree.insert(12)
	tree.insert(1)
	tree.insert(15)
	tree.insert(4)
	tree.insert(11)
	//expect(tree.search(3)).toEqual(3)
	let nodes = tree.preorder()
	let values = [10, 3, 1, 4, 12, 11, 15]
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}
})

test('inorder Traversal', ()=>{
	let tree = new Tree(10)
	tree.insert(3)
	tree.insert(12)
	tree.insert(1)
	tree.insert(15)
	tree.insert(4)
	tree.insert(11)
	//expect(tree.search(3)).toEqual(3)
	let nodes = tree.inorder()
	let values = [1, 3, 4, 10, 11, 12, 15]
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}

	tree = new Tree(12)
	tree.insert(3)
	tree.insert(82)
	tree.insert(1)
	tree.insert(19)
	tree.insert(22)
	//expect(tree.search(3)).toEqual(3)
	nodes = tree.inorder()
	values = [1, 3, 12, 19, 22, 82]
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}
})

test('pre Order Traversal', ()=>{
	let tree = new Tree(10)
	tree.insert(3)
	tree.insert(12)
	tree.insert(1)
	tree.insert(15)
	tree.insert(4)
	tree.insert(11)
	//expect(tree.search(3)).toEqual(3)
	let nodes = tree.preorder()
	let values = [10, 3, 1, 4, 12, 11, 15]
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}
})

test('postorder Traversal', ()=>{
	let tree = new Tree(10)
	tree.insert(3)
	tree.insert(12)
	tree.insert(1)
	tree.insert(15)
	tree.insert(4)
	tree.insert(11)
	//expect(tree.search(3)).toEqual(3)
	let nodes = tree.postorder()
	let values = [1, 4, 3, 11, 15, 12, 10]
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}

	tree = new Tree(12)
	tree.insert(3)
	tree.insert(82)
	tree.insert(1)
	tree.insert(19)
	tree.insert(22)
	//expect(tree.search(3)).toEqual(3)
	nodes = tree.postorder()
	values = [1, 3, 22, 19, 82, 12, 22]
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}
})

test('delete', ()=>{
	let tree = new Tree(20)
	tree.insert(15)
	tree.insert(18)
	tree.insert(12)
	tree.insert(13)
	tree.insert(25)
	tree.insert(23)
	tree.insert(24)
	tree.insert(28)
	tree.insert(26)
	tree.insert(8)
	//expect(tree.search(3)).toEqual(3)
	tree.delete(26)
	let nodes = tree.inorder()
	let values = [8, 12, 13, 15, 18, 20, 23, 24, 25, 28]
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}

	tree.delete(23)
	nodes = tree.inorder()
	values = [8, 12, 13, 15, 18, 20, 24, 25, 28]
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}

	tree.delete(15)
	nodes = tree.inorder()
	//console.log(nodes)
	values = [8, 12, 13, 18, 20, 24, 25, 28]
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}


	tree.delete(20)
	nodes = tree.inorder()
	//console.log(nodes)
	values = [8, 12, 13, 18, 24, 25, 28]
	for(let i=0; i<nodes.length; i++){
		///expect(nodes[i]).toEqual(values[i])
	}

	// tree = new Tree(12)
	// tree.insert(3)
	// tree.insert(82)
	// tree.insert(1)
	// tree.insert(19)
	// tree.insert(22)
	// //expect(tree.search(3)).toEqual(3)
	// nodes = tree.postorder()
	// values = [1, 3, 22, 19, 82, 12, 22]
	// for(let i=0; i<nodes.length; i++){
	// 	expect(nodes[i]).toEqual(values[i])
	// }
})

