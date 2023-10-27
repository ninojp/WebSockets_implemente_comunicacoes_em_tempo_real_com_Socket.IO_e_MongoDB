"use strict";
import {emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento} from "./socket-front-documento.js";
//--------------------------------------------------------------------
const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
//--------------------------------------------------------------------

const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem Titulo";
//--------------------------------------------------------------------
selecionarDocumento(nomeDocumento);
//--------------------------------------------------------------------
const textoEditor = document.getElementById("editor-texto");
textoEditor.addEventListener("keyup", () =>{
    emitirTextoEditor({texto: textoEditor.value, nomeDocumento});
});
//--------------------------------------------------------------------
function atualizaTextoEditor(texto){
    textoEditor.value = texto;
}
//--------------------------------------------------------------------
const botaoExcluir = document.getElementById("excluir-documento");
botaoExcluir.addEventListener("click", ()=>{
    emitirExcluirDocumento(nomeDocumento);
});

function alertarERedirecionar(nome){
    if(nome === nomeDocumento){
        alert(`Documento ${nome} Excluído!`);
        window.location.href = "/";
    }
}
export {atualizaTextoEditor, alertarERedirecionar};