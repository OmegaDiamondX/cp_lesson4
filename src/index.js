import { MiniMaple } from "./miniMaple";

document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('diffbutton').onclick = differ;
}

function differ(){
    const poly = document.getElementById("polynome").value;
    const vari = document.getElementById("variable").value;
    const result = document.getElementById("result");
    result.innerHTML = MiniMaple.differentiate(poly, vari);
}