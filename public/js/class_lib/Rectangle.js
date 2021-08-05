class Rectangle{
	ctx
	w=10
	h=10
	t=100
	constructor(ctx){console.log(ctx)
		this.ctx = ctx
		console.log(this.ctx)
	}

	drawRect(coords={x: 0, y: 0, width: 10, height: 10}){
		this.ctx.strokeRect(coords.x, coords.y, coords.width, coords.height)
		//this.ctx.clearRect(9, 9, 50,50)
		//this.ctx.strokeRect(coords.x, coords.y, coords.width, coords.height)
	}
}

export {Rectangle}