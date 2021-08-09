import {Rectangle} from "./class_lib/Rectangle.js"
import {Circle} from './class_lib/Circle.js'

import {LinkedList} from './class_lib/LinkedList.js'

let canvas
(function(){
	canvas = document.createElement("canvas")
	canvas.width = window.innerWidth - 5
	canvas.height = window.innerWidth * 0.4
	canvas.id = "canvas"
	document.querySelector("#canvas-container").appendChild(canvas)
	// let rect = new Rectangle(canvas.getContext("2d"))
	// rect.drawRect({x: 0, y: 0, width: 50, height: 100})
})()

let createInputAndButton = (id, placeholder, buttonClick, buttonText)=>{
	let input = document.createElement("input")
	input.id = id
	input.placeholder = placeholder

	let button = document.createElement("button")
	button.innerHTML = buttonText
	button.onclick = buttonClick

	let div = document.createElement("div")
	div.appendChild(input)
	div.appendChild(button)
	return div
}

let choice = document.getElementById("canvas-container").dataset.choice
if(choice == 1){
	
	let list = new LinkedList(canvas.getContext("2d"))
	const insertAtTail = (e)=>{//console.log(document.getElementById("insert").value)
		list.insertAtTail(document.getElementById("insert").value)
		document.getElementById("insert").value = ''
	}

	const insertAtHead = (e)=>{//console.log(document.getElementById("insert").value)
		list.insertAtHead(document.getElementById("insertAtHead").value)
		document.getElementById("insert").value = ''
	}

	const insertAfter = (e)=>{console.log(document.getElementById("insertAfter").value)
		list.insertAfter(document.getElementById("insertAfter").value, document.getElementById("pos").value)
		document.getElementById("insert").value = ''
	}

	const deleteOp = (e)=>{
		list.deleteNode(document.getElementById("delete").value)
		document.getElementById("delete").value = ''
	}

	const deleteNodeAt = (e)=>{
		list.deleteNodeAt(document.getElementById("deleteAt").value)
		document.getElementById("delete").value = ''
	}

	const search = (e)=>{
		list.search(document.getElementById("search").value)
		document.getElementById("search").value = ''
	}
	let  insertDiv = createInputAndButton("insert", "Insert", insertAtTail, "Insert")
	let insertAtHeadDiv = createInputAndButton("insertAtHead", "Insert At Head", insertAtHead, "Insert At Head")
	let insertAfterDiv = createInputAndButton("insertAfter", "Insert After", insertAfter, "Insert After")
	
	let pos = document.createElement("input")
	pos.id = "pos"
	pos.placeholder = "Position"
	pos.type= "number"
	insertAfterDiv.insertBefore(pos, insertAfterDiv.children[1])

	let deleteDiv = createInputAndButton("delete", "Delete", deleteOp, "delete")
	let deleteAtDiv = createInputAndButton("deleteAt", "Delete Node At", deleteNodeAt, "delete node at")

	let searchDiv = createInputAndButton("search", "Search", search, "Search")

	let opsDiv = document.getElementById("ops")
	opsDiv.appendChild(insertDiv)
	opsDiv.appendChild(insertAtHeadDiv)
	opsDiv.appendChild(insertAfterDiv)
	opsDiv.appendChild(deleteDiv)
	opsDiv.appendChild(deleteAtDiv)
	opsDiv.appendChild(searchDiv)
}else if(choice == 2){
	let circle = new Circle(canvas.getContext("2d"), {x: 80, y: 80, radius: 50, startAngle: 0, endAngle: Math.PI * 2, clockWise: 0})
	//circle.delete()
	//circle.update({x: 150, y: 80, radius: 50, startAngle: 0, endAngle: Math.PI * 2, clockWise: 0})
}
