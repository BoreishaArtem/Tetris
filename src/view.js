export default class View {
	static colors = {
		'1' : 'cyan',
		'2' : 'blue',
		'3' : 'orange',
		'4' : 'yellow',
		'5' : 'green',
		'6' : 'purple',
		'7' : 'red'
	}
	constructor(element, width, height, rows, columns) {
		this.element = element
		this.width = width
		this.height = height

		this.canvas = document.createElement('canvas')
		
    this.canvas.width = this.width
    this.canvas.height = this.height
		
		this.context = this.canvas.getContext('2d')

		this.blockWidht = this.width / columns
		this.blockHeight = this.height / rows

    this.element.appendChild(this.canvas)
	}

	render({ playfield }) {
		this.clearScreen()
		this.renderPlayField(playfield)
		
	}
	clearScreen() {
		this.context.clearRect(0, 0, this.width, this.height)
	}

	renderPlayField(playfield) {
		for(let y = 0; y < playfield.length; y++) {
			const line = playfield[y]

			for(let x = 0; x < line.length; x++) {
				const block = line[x]

				if (block) {
					this.renderBlock(x * this.blockWidht, y * this.blockHeight, this.blockWidht, this.blockHeight, View.colors[block])
				}
			}
		}
	}

	renderBlock(x, y, widht, height, color) {
		this.context.fillStyle = color // Color of Fill
		this.context.strokeStyle = 'black' // Color fo Stroke(or border)
		this.context.lineWidth = 2

		this.context.fillRect(x, y, widht, height)
		this.context.strokeRect(x, y, widht, height)
	}

}