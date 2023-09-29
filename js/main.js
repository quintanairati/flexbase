import { datubasea } from "./datubasea.js";

const base = "https://covers.openlibrary.org/b/id/";

let index = 0;

let aldatu = () => {
    let irudia = document.querySelector("#irudia")
    irudia.src = base + datubasea[index].filename;

    let izenburu = document.querySelector('#izenburua')
    izenburu.value = datubasea[index].izenburua
}


let botoia = document.querySelector("#botoia")
botoia.onclick = ()=> {
    index++;
    aldatu();
}

aldatu()