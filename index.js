import Game from './src/game.js'
import View from './src/view.js'

const root = document.querySelector('#root')

const game = new Game()
const view = new View(root, 580, 640, 20, 10)

window.game = game
window.view = view

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown') {
        game.movePieceDown()
        view.render(game.getState())
    }
    if (event.key === 'ArrowLeft') {
        game.movePieceLeft()
        view.render(game.getState())
    }
    if (event.key === 'ArrowRight') {
        game.movePieceRight()
        view.render(game.getState())
    }
    if (event.key === 'ArrowUp') {
        game.rotatePiece()
        view.render(game.getState())
    }
})

view.renderPlayField(game.getState())