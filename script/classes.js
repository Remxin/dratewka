import { game } from './game.js'
import { items } from '../data/items.js'

export default class Location {
    constructor(name, text, position, movement, img, bgc, item, itemCrafting) {
        this.name = name
        this.text = text
        this.position = position
        this.movement = movement
        this.image = img
        this.backgroundColor = bgc
        item ? this.items = [items.find(i => i.id === item)] : this.items = []
        // console.log(itemCrafting)
        itemCrafting[0]?.from ? this.itemCrafting = itemCrafting : null
        // console.log(this.itemCrafting)
        // console.log(this.items)
    }

    showInfo() {
        console.log(`text: ${this.text}`)
        console.log(`element: ${this.div}`)
        console.log(`position: ${this.position}`)
    }

    createField() {
        const div = document.createElement('div')
        // location text
        const text = document.createElement('h2')
        text.innerHTML = this.text
        div.setAttribute("id", `p${this.position.x}${this.position.y}`)
        div.classList.add("location")
        div.appendChild(text)
        // text input
        const input = document.createElement('input')
        this.input = input
        input.classList.add("input")
        game.globalInput = input
        input.setAttribute('type', 'text')
        input.focus()
        input.onkeydown = (e) => this.validateInputOptions(e)

        //perma focus
        input.onblur = () => input.focus()
        div.appendChild(input)
        // error field (if someone wants to go, where he cannot)
        const alert = document.createElement('p')
        this.alert = alert
        div.appendChild(alert)
        // displaying image
        const image = document.createElement('img')
        image.setAttribute("src", `../img/${this.image}`)
        image.style.backgroundColor = `${this.backgroundColor}`
        image.classList.add("location-img")
        div.appendChild(image)
        // displaying what items are in location
        const itemsText = document.createElement('p')
        itemsText.innerHTML = "You see "
        // console.log(this.items)
        if (this.items.length > 0) {
            this.items.forEach(i => {
                itemsText.innerHTML += `${i.text}, `
            })
        } else {
            itemsText.innerHTML += "nothing  "
        }
        // deleting , from the end
        let itemsString = itemsText.innerHTML
        itemsString = itemsString.slice(0, -1)
        itemsText.innerHTML = itemsString.slice(0, -1)
        div.appendChild(itemsText)
        // displaying what items is player carrying
        const playerBagText = document.createElement('p')
        playerBagText.innerHTML = "You carry "
        if (game.player.bag.length > 0) {
            game.player.bag.forEach((i) => {
                // console.log(i)
                playerBagText.innerHTML += `${i.text}, `
            })
        } else {
            playerBagText.innerHTML += "nothing  "
        }
        // deleting , from the end
        let bagString = playerBagText.innerHTML
        bagString = bagString.slice(0, -1)
        playerBagText.innerHTML = bagString.slice(0, -1)
        div.appendChild(playerBagText)

        //appending changes
        this.div = div
        this.addMovementOptions()
        this.changeCompass()
    }
    addMovementOptions() {
        const movementList = document.createElement('p')
        movementList.innerHTML = "You can go: "
        this.movement.forEach((direction) => {
            let fullDirName
            direction === 'w' ? fullDirName = "west" : null
            direction === 'e' ? fullDirName = "east" : null
            direction === 'n' ? fullDirName = "north" : null
            direction === 's' ? fullDirName = "south" : null
            direction === '!w' ? fullDirName = "west?" : null
            movementList.innerHTML += fullDirName + ', '

        })
        let movementString = movementList.innerHTML
        movementString = movementString.slice(0, -1)
        movementList.innerHTML = movementString.slice(0, -1)
        this.div.appendChild(movementList)
    }

    async validateInputOptions(e) {
        const input = this.input
        // console.log(this)

        if (e.keyCode == 13) {
            e.preventDefault()
            let inputText = input.value
            input.value = ""
            input.focus()
            game.alert.innerHTML = ""
            inputText = inputText.toLocaleLowerCase()
            // console.log(inputText)
            const action = inputText.split(" ")[0]
            console.log(action)

            switch (action) {
                case ('w'):
                case ("west"):
                    console.log(this.movementList)
                    console.log(game.dragonKilled)
                    if (this.movement.includes('!w')) { // special west direction
                        if (game.dragonKilled) {
                            game.alert.innerHTML = "You are going west"
                            game.player.position.x--
                            game.player.travelToLocation()
                        } else {
                            game.alertSpecialChangeContent("You can't go that way... (timeout) The dragon sleeps in a cave! (timeout)")
                        }
                        return
                    } // normal west direction
                    if (this.movement.includes('w')) {
                        game.alert.innerHTML = "You are going west"
                        game.player.position.x--
                    } else {
                        this.alert.innerHTML = "You cannot move on west!"
                    }
                    break;
                case ('e'):
                case ("east"):
                    if (this.movement.includes('e')) {
                        game.alert.innerHTML = "You are going east"
                        game.player.position.x++
                    } else {
                        this.alert.innerHTML = "You cannot move on east!"
                    }
                    break;
                case ('n'):
                case ("north"):
                    if (this.movement.includes('n')) {
                        game.alert.innerHTML = "You are going north"
                        game.player.position.y--
                    } else {
                        this.alert.innerHTML = "You cannot move on north!"
                    }
                    break;
                case ('s'):
                case ("south"):
                    if (this.movement.includes('s')) {
                        game.alert.innerHTML = "You are going south"
                        game.player.position.y++
                    } else {
                        this.alert.innerHTML = "You cannot move on south!"
                    }
                    break;
                case ('t'):
                case ("take"):
                    if (game.player.bag.length > 0) {
                        game.alert.innerHTML = "You can carry only one item!"
                        return
                    }
                    const whatToPick = inputText.split(" ")[1]
                    const pickedItem = this.items.find(i => {
                        return i.name === whatToPick
                    })
                    console.log(pickedItem)
                    if (pickedItem && pickedItem.pickable) {
                        game.alert.innerHTML = `You picked ${pickedItem.name}`
                        game.player.bag.push(pickedItem)
                        this.items = this.items.filter(i => i.name !== pickedItem.name)
                        this.createField()
                    } else {
                        console.log('nothing')
                        this.alert.innerHTML = `There isn't anything like that here: ${whatToPick}`
                    }
                    break
                case ('d'):
                case ("drop"):
                    if (game.player.bag.length === 0) {
                        game.alert.innerHTML = "You are not carrying anything"
                        return
                    }
                    const whatToDrop = inputText.split(" ")[1]
                    const droppedItem = game.player.bag.find(i => whatToDrop === i.name)
                    console.log(droppedItem)
                    if (droppedItem) { // masz taki item
                        let locationItemCount = 0
                        for (const item of this.items) {
                            console.log(item)
                            if (item.pickable) {
                                locationItemCount++
                            }
                        }
                        console.log(locationItemCount)
                        if (locationItemCount < 3) { // na lokacji nie ma więcej niż 3 itemy
                            this.items.push(droppedItem)
                            console.log(this.items)
                            game.player.bag = game.player.bag.filter((i) => i.name !== droppedItem.name)
                            this.createField()
                            game.alert.innerHTML = `You dropped ${droppedItem.name}`
                        } else { // na lokacji są ponad 3 itemy
                            game.alert.innerHTML = "You can't store any more here (consider chosing different location)"
                        }

                    } else { // nie nosisz takiego itema
                        game.alert.innerHTML = `You are not carrying ${whatToDrop}`
                    }
                    break
                case ('u'): // TODO: game end
                case ("use"):
                    console.log('use')
                    const whatToUse = inputText.split(" ")[1]
                    const usedItem = game.player.bag.find(i => i.name === whatToUse)
                    if (usedItem) {
                        if (usedItem.id === 36) {
                            game.endGame()
                            return
                        }
                        const craftingInfo = this.itemCrafting.find(craftFrom => {
                            return craftFrom.from === usedItem.id
                        })
                        console.log(craftingInfo)
                        if (craftingInfo) {
                            game.alertSpecialChangeContent(craftingInfo.text)
                            game.player.bag = game.player.bag.filter(i => i.id !== craftingInfo.from)
                            const newItem = items.find(i => i.id === craftingInfo.to)
                            console.log(newItem)
                            if (newItem.id === 30) {
                                game.dragonKill()
                                this.items.push(newItem)
                                return
                            }
                            if (newItem.pickable) { // pickable item lands in your hands
                                game.player.bag.push(newItem)
                            } else { //unpickable item lands at the place
                                this.items.push(newItem)
                            }
                        } else {
                            game.alert.innerHTML = "Nothing happened"

                        }
                    } else {
                        game.alert.innerHTML = "You aren't carrying anything like that"
                    }

                    break
                case ('v'):
                case ("vocabulary"):
                    game.alert.innerHTML = "NORTH or N <br/>"
                    game.alert.innerHTML += "SOUTH or S <br/>"
                    game.alert.innerHTML += "WEST or W <br/>"
                    game.alert.innerHTML += "EAST or E <br/>"
                    game.alert.innerHTML += "TAKE or T (object)<br/>"
                    game.alert.innerHTML += "DROP or D (object) <br/>"
                    game.alert.innerHTML += "USE or U (object) <br/>"
                    game.alert.innerHTML += "GOSSIPS or G (object) <br/>"
                    game.alert.innerHTML += "VOCABULARY or V (object) <br/>"
                    game.alert.innerHTML += "Press any key"
                    return
                case ('g'):
                case ("gossips"):
                    game.alert.innerHTML = "The woodcutter lost his home key... <br/>"
                    game.alert.innerHTML += "The butcher likes fruit... <br/>"
                    game.alert.innerHTML += "The cooper is greedy... <br/>"
                    game.alert.innerHTML += "Dratewka plans to make a poisoned trait for the dragon... <br/>"
                    game.alert.innerHTML += "Tavern owner is buying food from the pickers... <br/>"
                    game.alert.innerHTML += "Making a rag from a bag... <br/>"
                    game.alert.innerHTML += "Press any key <br/>"
                    return
                default:
                    game.alert.innerHTML = "Invalid command, type V to show all commands"
                    break
            }
            setTimeout(() => {
                game.alert.innerHTML = ""
            }, 3000)
            game.player.travelToLocation()

        }
    }

    showLocation = () => {
        const child = document.getElementById('main').children[0]
        // console.log(child)
        if (child) document.getElementById("main").removeChild(child)

        document.getElementById("main").appendChild(this.div)
        this.input.focus()
    }

    changeCompass = () => {
        let imgName = "../img/global/c"
        if (this.movement.includes("w")) {
            imgName += "w"
        }
        if (this.movement.includes("!w")) {
            imgName += "w"
        }
        if (this.movement.includes("s")) {
            imgName += "s"
        }
        if (this.movement.includes("e")) {
            imgName += "e"
        }
        if (this.movement.includes("n")) {
            imgName += "n"
        }
        imgName += ".png"
        // console.log(imgName)
        game.compass.setAttribute('src', imgName)
    }

}