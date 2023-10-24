"use strict";

import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome){
   socket.emit("selecionar_documento", nome);

}

function emitirTextoEditor(texto){
    socket.emit("texto_digitado", texto);// Cria um evento, emitindo o valor digitado
}

socket.on("texto_digitado_cliente", (texto) => {
    atualizaTextoEditor(texto)
} );

socket.on("disconnect", (motivo) => {
    console.log(`Servidor desconectado!
    Motivo: ${motivo}`);
  });

export {emitirTextoEditor, selecionarDocumento};