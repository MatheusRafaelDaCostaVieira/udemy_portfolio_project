function openMenu() {
    var menu = document.getElementById('menu')
    menu.classList.add("open")
}
function closeMenu() {
    var menu = document.getElementById('menu')
    menu.classList.remove("open")
}

window.addEventListener("scroll", headerAnimation)

function headerAnimation() {
    var header = document.getElementById('header')
    const scroll = window.scrollY

    if(scroll > 0) {
        header.classList.add("scroll")
    }
    else {
        header.classList.remove("scroll")
    }
}