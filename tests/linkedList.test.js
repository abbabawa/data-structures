const linkedList = require('../LinkedList')

test('insert at head', ()=>{
	let list = new linkedList()
	expect(list.insertAtHead(2).data).toBe(2)
})

test('insert at tail', ()=>{
	let list = new linkedList()
	list.insertAtHead(3)
	list.insertAtHead(8)
	expect(list.insertAtTail(2).next).toBe(null)
})

test('insert after', ()=>{
	let list = new linkedList()
	list.insertAtHead(5)
	list.insertAtTail(10)
	list.insertAtTail(15)
	let node = list.search(10)
	expect(list.insertAfter(3, node).data).toBe(3)
})

test('search', ()=>{
	let list = new linkedList()
	list.insertAtHead(10)
	list.insertAtHead(13)
	list.insertAtHead(0)
	list.insertAtHead(8)
	expect(list.search(13).data).toBe(13)
})

test('deleteNode', ()=>{
	let list = new linkedList()
	list.insertAtHead(10)
	list.insertAtHead(13)
	list.insertAtHead(0)
	list.insertAtHead(8)
	list.deleteNode(13)
	expect(list.search(2)).toBe("item not found")
})

test('deleteNodeAt', ()=>{
	let list = new linkedList()
	list.insertAtHead(10)
	list.insertAtHead(13)
	list.insertAtHead(0)
	list.insertAtHead(8)
	list.deleteNodeAt(2)
	expect(list.search(13)).toBe("item not found")
})
