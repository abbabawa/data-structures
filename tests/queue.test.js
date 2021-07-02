const Queue = require('../Queue')

test('enqueue', ()=>{
	let queueObj = new Queue()
	expect(queueObj.enqueue(2)).toBe('Item added successfully')
	expect(queueObj.enqueue(4)).toBe('Item added successfully')
	expect(queueObj.enqueue(12)).toBe('Item added successfully')
	expect(queueObj.enqueue(5)).toBe('Item added successfully')
})

test('dequeue', ()=>{
	let queueObj = new Queue(5)
	queueObj.enqueue(10)
	queueObj.enqueue(20)
	queueObj.enqueue(82)
	expect(queueObj.dequeue()).toBe(10)
	queueObj.enqueue(33)
	expect(queueObj.dequeue()).toBe(20)
})

test('peek', ()=>{
	let queueObj = new Queue(3)
	expect(queueObj.peek()).toBe("Queue is empty")
	queueObj.enqueue(13)
	queueObj.enqueue(76)
	queueObj.enqueue(11)
	expect(queueObj.peek()).toBe(13)
	queueObj.dequeue()
	expect(queueObj.peek()).toBe(76)
})

test('is empty', ()=>{
	let queueObj = new Queue(4)
	expect(queueObj.isEmpty()).toBe(true)
	queueObj.enqueue(13)
	queueObj.enqueue(76)
	queueObj.enqueue(11)
	expect(queueObj.isEmpty()).toBe(false)
	queueObj.dequeue()
	queueObj.dequeue()
	queueObj.dequeue()
	expect(queueObj.isEmpty()).toBe(true)
})

// test('is full', ()=>{
// 	let queueObj = new Queue(4)
// 	expect(queueObj.isFull()).toBe(false)
// 	queueObj.enqueue(13)
// 	queueObj.enqueue(76)
// 	queueObj.enqueue(11)
// 	queueObj.enqueue(99)
// 	expect(queueObj.isFull()).toBe(true)
// 	queueObj.dequeue()
// 	queueObj.dequeue()
// 	queueObj.dequeue()
// 	expect(queueObj.isFull()).toBe(false)
// })