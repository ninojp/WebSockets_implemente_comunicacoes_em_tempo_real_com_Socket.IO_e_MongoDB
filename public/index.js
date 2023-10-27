"use strict";
import { emitirAdicionarDocumento } from "./socket-front-index.js";

const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");
form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    emitirAdicionarDocumento(inputDocumento.value);
    inputDocumento.value = "";
});

//------------------------------------------------------------------------------------------
const listaDocumentos = document.getElementById("lista-documentos");
function inserirLinkDocumento(nomeDocumento){
    listaDocumentos.innerHTML += `<a href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action">
    ${nomeDocumento}</a> `;
}
export {inserirLinkDocumento};