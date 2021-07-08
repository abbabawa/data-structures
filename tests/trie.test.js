const Trie = require("../Trie")

test('insert', ()=>{
	let trie = new Trie()
	trie.insert('think')
	trie.insert('thank')
	trie.insert('thought')
	trie.insert('apple')
	trie.print()
})

test('search', ()=>{
	let trie = new Trie()
	trie.insert('think')
	trie.insert('thank')
	trie.insert('thought')
	trie.insert('apple')
	expect(trie.search('bee')).toBe('bee not found in trie')
	expect(trie.search('apple')).toBe('apple found in trie')
	expect(trie.search('thank')).toBe('thank found in trie')
	expect(trie.search('thinking')).toBe('thinking not found in trie')
	expect(trie.search('tink')).toBe('tink not found in trie')
})