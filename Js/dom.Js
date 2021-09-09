//Obtener elemento por ID//
const titulo = document.getElementById("perro");

//Obtener elemento por nombre de etiqueta//
const subtitulo = document.getElementsByTagName("h2");

//Obtener elemento por clase
const elemento = document.querySelector("#tilin");

const parrafo = document.getElementsByClassName('Parrafo');


titulo.innerHTML = "Document<33";
subtitulo[1].innerHTML = "Tilín Tilín";
Parrafo[3].innerHTML = "Fui modificado en JS";

const imagen = document.querySelector('#img');

const body = document.body;

const cambiarBg = () =>{
    body.classList.add('bg3')
}
