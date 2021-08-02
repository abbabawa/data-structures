const Tree = require("../AVLTree")

/*test('insert', ()=>{console.log("start")
	let tree = new Tree(20)
	tree.insert(30)
	tree.insert(10)
	tree.insert(11)
	tree.insert(40)
	tree.insert(50)
	tree.insert(13)
	tree.insert(16)
	tree.insert(17)
	tree.insert(19)
	
	//console.log(tree.inorder())
})*/

test('left rotate', ()=>{
	let tree = new Tree(20)
	tree.insert(24)
	tree.insert(26)
	tree.insert(27)
	tree.insert(28)
})

test('right rotate', ()=>{//console.log("right rotate")
	let tree = new Tree(30)
	tree.insert(24)
	tree.insert(20)
	tree.insert(19)
	tree.insert(16)
})

test('left right rotate', ()=>{//console.log("left right rotate")
	let tree = new Tree(30)
	tree.insert(24)
	tree.insert(26)
	tree.insert(15)
	tree.insert(16)
})

test('right left rotate', ()=>{//console.log("right left rotate")
	let tree = new Tree(30)
	tree.insert(40)
	tree.insert(35)
	tree.insert(15)
	tree.insert(16)
})

test('delete', ()=>{
	let tree = new Tree(20)
	tree.insert(25)
	tree.insert(15)
	tree.insert(28)
	tree.insert(23)
	tree.insert(18)
	tree.insert(12)
	tree.insert(8)
	tree.insert(13)
	tree.insert(24)
	tree.insert(26)

	//Delete node with no children
	values = [8, 12, 13, 15, 18, 20, 23, 25, 26, 28]
	tree.delete(24)
	nodes = tree.inorder()
	//console.log(nodes)
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}

	//delete node with left child
	values = [8, 12, 13, 15, 18, 20, 23, 25, 26]
	tree.delete(28)
	nodes = tree.inorder()
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}

	//delete node with right child
	tree.insert(29)
	values = [8, 12, 13, 15, 18, 20, 23, 25, 29]
	tree.delete(26)
	nodes = tree.inorder()
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}

	//delete node with two children
	values = [8, 12, 13, 18, 20, 23, 25, 29]
	tree.delete(15)
	nodes = tree.inorder()
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}

	values = [8, 12, 13, 18, 23, 25, 29]
	tree.delete(20)
	nodes = tree.inorder()
	for(let i=0; i<nodes.length; i++){
		expect(nodes[i]).toEqual(values[i])
	}
})