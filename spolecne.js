const menuTlacitko = document.querySelector("#menu-tlacitko")
const menuPolozky = document.querySelector("#menu-polozky")
const click = () => {
    menuPolozky.classList.toggle("show")
}

menuTlacitko.addEventListener("click", click)