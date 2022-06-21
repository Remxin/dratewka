import { game } from "./game.js"

export const endGame = () => {

    document.getElementById('main').innerHTML = "" // deleting main content
    const mainDiv = document.getElementById('main')
    document.getElementById("game").innerHTML = ""
    document.getElementById("game").appendChild(mainDiv)
    const endImg = document.createElement('img') // adding image
    endImg.setAttribute("src", '../img/global/win.jpg')
    endImg.classList.add("end-image")
    document.getElementById('main').appendChild(endImg)
    // adding text
    const winText = document.createElement('p')
    winText.classList.add("win-text")
    winText.innerHTML = "Congratulations!<br/> You won the game!"
    document.getElementById('main').appendChild(winText)
    game.alert.innerHTML = ""
    const music = new Audio('../audio/hejnau.mp3')
    music.play()

}

