const PAGINA = document.querySelector("body");
const TIPO_COLOR = document.querySelector("select");
const PARRAFO = document.querySelector("#parrafo");
const IMG = document.querySelector("img");
const IMG_1 = "https://okdiario.com/img/2018/07/11/significado-del-color-blanco.jpg";
const IMG_2 = "https://upload.wikimedia.org/wikipedia/commons/7/72/Violet_Purple_Color.svg";
const IMG_3 = "https://www.jardineriaon.com/wp-content/uploads/2017/03/rosa-roja-1-830x551.jpg";

function cambioColor() {

    switch (TIPO_COLOR.value) {
        case "color 1":
            PAGINA.style.color = "white";
            PAGINA.style.backgroundColor = "black";
            TIPO_COLOR.style.color = "white";
            IMG.src = IMG_1;
            break;
        case "color 2":
            PAGINA.style.color = "violet";
            PAGINA.style.backgroundColor = "brown";
            TIPO_COLOR.style.color = "violet";
            IMG.src = IMG_2;
            break;
        case "color 3":
            PAGINA.style.color = "pink";
            PAGINA.style.backgroundColor = "grey";
            TIPO_COLOR.style.color = "pink";
            IMG.src = IMG_3;
            break
        default:
            PARRAFO.innerHTML = "error"
            PAGINA.style.backgroundColor = "white"
            PAGINA.style.color = "black"
            TIPO_COLOR.style.color = "red";

    }
}