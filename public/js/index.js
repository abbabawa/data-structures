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

let choice = document.getElementById("canvas-container").dataset.choice
if(choice == 1){
	//let rect = new Rectangle(canvas.getContext("2d"), {x: 30, y: 5, width: 50, height: 100}, '.')
	//rect.deleteRect()
	//rect.update({x: 60, y: 20, width: 50, height: 100}, 'new content')
	let list = new LinkedList(canvas.getContext("2d"))
	const insert = (e)=>{console.log(document.getElementById("insert").value)
		list.insertAtTail(document.getElementById("insert").value)
	}
	const deleteOp = (e)=>{
		list.deleteNode(document.getElementById("delete").value)
	}
	// let operations = `<div class="mt-2 pt-2">
	// 	<input type="text" name="insert" placeholder="Insert Data" id="insert" >
	// 	<button type="button" onclick="${insert}">Insert</button>
	// </div>`
	let  insertInput = document.createElement("input")
	insertInput.id = "insert"
	insertInput.type = "text"
	let insertButton = document.createElement("button")
	insertButton.innerHTML = "insert"
	insertButton.onclick = insert

	let deleteInput = document.createElement("input")
	deleteInput.id = "delete"
	let deleteButton = document.createElement("button")
	deleteButton.innerHTML = "Delete"
	deleteButton.onclick = deleteOp
	document.getElementById("ops").appendChild(insertInput)
	document.getElementById("ops").appendChild(insertButton)
	document.getElementById("ops").appendChild(deleteInput)
	document.getElementById("ops").appendChild(deleteButton)
	
	list.insertAtHead(22)
	list.insertAtHead(30)
	list.insertAtHead(40)
	list.insertAtTail(50)
	list.insertAfter(15, 2)
	list.deleteNode(50)
	list.deleteNode(30)
	list.deleteNode(40)
	list.deleteNode(22)
	list.deleteNode(15)
}else if(choice == 2){
	let circle = new Circle(canvas.getContext("2d"), {x: 80, y: 80, radius: 50, startAngle: 0, endAngle: Math.PI * 2, clockWise: 0})
	//circle.delete()
	//circle.update({x: 150, y: 80, radius: 50, startAngle: 0, endAngle: Math.PI * 2, clockWise: 0})
}
