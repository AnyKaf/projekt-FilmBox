const menuTlacitko = document.querySelector("#menu-tlacitko")
const menuPolozky = document.querySelector("#menu-polozky")
const ikona = document.querySelector("i")

const click = () => {
    const jeOtevrene = menuPolozky.classList.toggle("show")

    ikona.classList.remove("fa-xmark", "fa-bars")

    if (jeOtevrene) {
        ikona.classList.add("fa-xmark")
      } else {
        ikona.classList.add("fa-bars")
      }
}

menuTlacitko.addEventListener("click", click)

