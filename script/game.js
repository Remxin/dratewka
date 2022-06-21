import { items } from '../data/items.js'
import { locations } from '../data/locations.js'
import { endGame } from './end.js'
// global variable, where are all key informations
export const game = {
    locations: [],
    player: {
        position: {
            y: 4,
            x: 7,
            // x: 3, y: 4 // koncowa pozycja
        },
        // bag: [items.find(i => i.id === 37)], // końcowe itemy
        bag: []
    },
    dragonKilled: false,
    endGame,
    firstLocation: true,
    alertSpecialChangeContent: (text) => {
        const textParts = text.split("(timeout)")
        game.alert.innerHTML = textParts[0]

        let i = 0
        textParts.forEach((t) => {

            if (i !== 0) {
                setTimeout(() => {
                    game.alert.innerHTML = t
                }, 3000 * i)
            }
            i++
        })
    },
    dragonKill: () => {
        console.log(game.player.position)
        console.log('dragon killed')
        const deadDragonLoc = game.locations.find(loc => loc.position.x === 2 && loc.position.y === 4)
        const playerLoc = game.locations.find(loc => loc.position.x === game.player.position.x && loc.position.y === game.player.position.y)
        console.log(deadDragonLoc)
        deadDragonLoc.image = "dragon.gif"
        game.player.bag = []
        deadDragonLoc.createField()
        playerLoc.createField()
        playerLoc.showLocation()
        game.dragonKilled = true

    }
}