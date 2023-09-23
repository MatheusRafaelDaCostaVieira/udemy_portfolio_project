function openMenu() {
    var menu = document.getElementById('menu')
    menu.classList.add("open")
}
function closeMenu() {
    var menu = document.getElementById('menu')
    menu.classList.remove("open")
}

window.addEventListener("scroll", navbarAnimation)

function navbarAnimation() {
    var navbar = document.getElementById('nav')
    const scroll = window.scrollY

    if(scroll > 0) {
        navbar.classList.remove("scroll")
    }
    else {
        navbar.classList.add("scroll")
    }
}