class Rectangle{
	ctx
	x
	y
	width=10
	height=10
	t=100
	constructor(ctx, coords){
		this.ctx = ctx
		this.x = coords.x
		this.y = coords.y
		this.width = coords.width
		this.height = coords.height
		this.draw()
	}

	draw(){
		this.ctx.strokeRect(this.x, this.y, this.width, this.height)
	}

	update(coords){
		this.x = coords.x
		this.y = coords.y
		this.width = coords.width
		this.height = coords.height
		this.draw()
	}

	deleteRect(){
		this.ctx.clearRect(this.x - 1, this.y - 1, this.width + 2, this.height + 2)
	}
}

export {Rectangle}