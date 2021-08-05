import {Rectangle} from "./class_lib/Rectangle.js"
import {Circle} from './class_lib/Circle.js'

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
	let rect = new Rectangle(canvas.getContext("2d"), {x: 30, y: 5, width: 50, height: 100})
	rect.deleteRect()
	rect.update({x: 60, y: 20, width: 50, height: 100})
}else if(choice == 2){
	let circle = new Circle(canvas.getContext("2d"), {x: 80, y: 80, radius: 50, startAngle: 0, endAngle: Math.PI * 2, clockWise: 0})
	//circle.delete()
	//circle.update({x: 150, y: 80, radius: 50, startAngle: 0, endAngle: Math.PI * 2, clockWise: 0})
}
