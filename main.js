let buttons = document.querySelector("#toggle");

let nav = document.querySelector("#nav");

buttons.addEventListener('click',() => {
    nav.classList.toggle('active')
})
