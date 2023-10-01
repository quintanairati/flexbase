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

    let date = document.querySelector('#data'); //lo de dentro se los parenetesis es la palabra que este en el index puesta
    date.value = datubasea[index].data;
}

let botoia2 = document.querySelector("#data")
botoia2.onclick = () => {
    if (index = 4)
        index = 0;
    else 
        index ++;
    aldatu();
}

let botoia1 = document.querySelector("#data")
botoia1.onclick = () => {
    if (index = 0)
        index = 4;
    else 
        index --;
    aldatu();
}


let bilatu = () => {
    let isbn = document.querySelector('#isbn');
    //que busque en la DB la isbn y que me de el index
    //index = 
    isbn.value = datubasea[index].isbn;

    let irudia = document.querySelector("#irudia");
    irudia.src = base + datubasea[index].filename;
    
    let izenburu = document.querySelector('#izenburu');
    izenburu.value = datubasea[index].izenburua;

    let egile = document.querySelector('#egilea');
    egile.value = datubasea[index].egilea;

    let date = document.querySelector('#data');
    date.value = datubasea[index].data;
}

let botoia3 = document.querySelector("#data")
botoia3.onclick = () => {
   bilatu();
}


aldatu()