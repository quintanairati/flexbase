import{datubasea} from "./datubasea.js";

const base = "https://covers.openlibrary.org/b/id/";

let index = 0;

let aldatu = () => {
    let irudia = document.querySelector("#irudia");
    irudia.src = base + datubasea[index].filename;
    
    let izenburu = document.querySelector('#izenburu');
    izenburu.value = datubasea[index].izenburua;

    let egile = document.querySelector('#egilea');
    egile.value = datubasea[index].egilea;

    let isbn = document.querySelector('#isbn');
    isbn.value = datubasea[index].isbn;

    let date = document.querySelector('#data');
    date.value = datubasea[index].data;
}

let botoia = document.querySelector("#data")
botoia.onclick = () => {
    index++;
    aldatu();
}

aldatu()