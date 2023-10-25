"use strict";
import { atualizaTextoEditor } from "./documento.js";
//--------------------------------------------------------------------
const socket = io();
//--------------------------------------------------------------------
function selecionarDocumento(nome){
   socket.emit("selecionar_documento", nome);
}
//--------------------------------------------------------------------
// function emitirTextoEditor(texto, nomeDocumento){
//     socket.emit("texto_digitado", texto, nomeDocumento);// Cria um evento, emitindo o valor digitado
// }
//Igual a função acima, só que usando um objeto como parametro
function emitirTextoEditor(dados){
    socket.emit("texto_digitado", dados);
}
//--------------------------------------------------------------------
socket.on("texto_digitado_cliente", (texto) => {
    atualizaTextoEditor(texto)
} );
//--------------------------------------------------------------------
socket.on("disconnect", (motivo) => {
    console.log(`Servidor desconectado!
    Motivo: ${motivo}`);
  });
//--------------------------------------------------------------------
export {emitirTextoEditor, selecionarDocumento};