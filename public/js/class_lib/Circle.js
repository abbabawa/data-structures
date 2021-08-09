class Circle{
	x
	y
	radius
	startAngle
	endAngle
	clockWise = false
	constructor(ctx, props){
		this.ctx = ctx
		this.x = props.x
		this.y = props.y
		this.radius = props.radius
		this.startAngle = props.startAngle
		this.endAngle = props.endAngle
		this.clockWise = props.clockWise

		this.draw()
	}

	draw(){
		this.ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.clockWise)
		this.ctx.stroke()
	}

	update(props){
		this.x = props.x
		this.y = props.y
		this.radius = props.radius
		this.startAngle = props.startAngle
		this.endAngle = props.endAngle
		this.clockWise = props.clockWise
		this.ctx.moveTo(this.x, this.y)

		this.draw()
	}

	delete(){
		this.ctx.clearRect(
			this.x - this.radius -2, 
			this.y - this.radius - 2, 
			this.x + this.radius + 2, 
			this.y + this.radius + 2
		)
	}
}

export {Circle}