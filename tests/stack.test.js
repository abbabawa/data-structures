const stack = require('../Stack')

test('push', ()=>{
	let stackObj = new stack()
	expect(stackObj.push(2)).toBe('Item added successfully')
	expect(stackObj.push(43)).toBe('Item added successfully')
})

test('pop', ()=>{
	let stackObj = new stack()
	stackObj.push(3)
	stackObj.push(43)
	stackObj.push(40)
	stackObj.push(21)
	expect(stackObj.pop()).toBe(21)
	expect(stackObj.pop()).toBe(40)
})

test('peek', ()=>{
	let stackObj = new stack()
	stackObj.push(4)
	stackObj.push(67)
	stackObj.push(11)
	stackObj.push(32)
	expect(stackObj.peek()).toBe(32)
})