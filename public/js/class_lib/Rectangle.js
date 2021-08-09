class Rectangle{
	ctx
	x
	y
	width=10
	height=10
	t=100
	constructor(ctx, coords, content = ''){
		this.ctx = ctx
		this.x = coords.x
		this.y = coords.y
		this.width = coords.width
		this.height = coords.height
		this.draw(content)
	}

	draw(content){
		this.ctx.strokeRect(this.x, this.y, this.width, this.height)
		this.ctx.font = '20px serif'
		this.ctx.textAlign = 'center'
		this.ctx.textBaseline = 'middle'
		this.ctx.strokeText(content, this.x + (this.width * 0.5), this.y + (this.height * 0.5))
	}

	update(coords, content){
		this.x = coords.x
		this.y = coords.y
		this.width = coords.width
		this.height = coords.height
		this.draw(content)
	}

	deleteRect(){
		this.ctx.clearRect(this.x - 1, this.y - 1, this.width + 2, this.height + 2)
	}
}

export {Rectangle}