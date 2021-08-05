import {Rectangle} from "./class_lib/Rectangle.js"

(function(){
	let canvas = document.createElement("canvas")
	canvas.width = window.innerWidth - 5
	canvas.height = window.innerWidth * 0.4
	canvas.id = "canvas"
	document.querySelector("body").appendChild(canvas)
	let rect = new Rectangle(canvas.getContext("2d"))
	rect.drawRect({x: 0, y: 0, width: 50, height: 100})
})()