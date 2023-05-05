const PAGINA = document.querySelector("body");
const TIPO_COLOR = document.querySelector("select");
const PARRAFO = document.querySelector("#parrafo");



function cambioColor() {
    switch (TIPO_COLOR.value) {
        case "color 1":
            PAGINA.style.color = "white";
            PAGINA.style.backgroundColor = "black";
            break;
        case "color 2":
            PAGINA.style.color = "violet";
            PAGINA.style.backgroundColor = "brown";
            break;
        case "color 3":
            PAGINA.style.color = "pink";
            PAGINA.style.backgroundColor = "grey";
            break
        default:
            PARRAFO.innerHTML = "error"
            PAGINA.style.backgroundColor = "white"
            PAGINA.style.color = "black"
           
    }
}