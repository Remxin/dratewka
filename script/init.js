import Location from './classes.js'
import { locations } from '../data/locations.js'
import { game } from './game.js'

const allLocations = []

export const startScreen = (callback1, callback2) => {
    const startImg = document.createElement('img')
    startImg.setAttribute('src', '../img/global/start.jpg')
    startImg.classList.add('end-image')
    document.getElementById('main').appendChild(startImg)
    const startMusic = new Audio('../audio/hejnal.mp3')
    window.alert('By odtworzyć muzykę kliknij w ekran')


    window.onmousemove = () => {
        startMusic.play().then(() => window.onmousemove = "")
    }



    // startMusic.play()
    setTimeout(() => {
        startImg.setAttribute('src', '../img/global/text0.jpg')
        setTimeout(() => {
            startImg.setAttribute('src', '../img/global/text1.jpg')
            setTimeout(() => {
                callback1()
                callback2()
                startMusic.load()
            }, 15000)
        }, 15000)
    }, 5000)
}

export const initFields = () => {
    locations.forEach((loc) => {
        let newLocation = new Location(loc.name, loc.text, loc.cords, loc.movement, loc.img, loc.bgc, loc.itemID, loc.itemCrafting)
        allLocations.push(newLocation)
        newLocation.createField()
    })
    game.locations = allLocations
}

export const playerMove = () => {
    console.log(game.player.position)
    const startLoc = allLocations.find((loc) => {
        // console.log(loc.position, game.player.position)
        return (loc.position.x === game.player.position.x && loc.position.y === game.player.position.y)
    }
    )
    if (game.firstLocation) {
        startLoc.createField()
        startLoc.showLocation()
        game.alert.innerHTML = ""
        game.firstLocation = false
        return
    }
    console.log(startLoc)
    setTimeout(() => {
        startLoc.createField()
        startLoc.showLocation()
        game.alert.innerHTML = ""
    }, 1000)
}

// declaring global alert
const alert = document.createElement('p')
alert.classList.add("global-alert")
document.getElementById("game").appendChild(alert)
game.alert = alert

// declaring compass
const compass = document.createElement('img')
compass.classList.add("compass")
document.getElementById("game").appendChild(compass)
compass.setAttribute('alt', "compass image")
game.compass = compass


game.player.travelToLocation = playerMove

