
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

function handleClick(event) {
    event.preventDefault ()
    console.log("Cheguei quero poderes, poderes magicos") 
}


const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', function() {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
})
