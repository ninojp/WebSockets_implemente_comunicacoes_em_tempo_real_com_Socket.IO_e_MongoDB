"use strict";
const socket = io();

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () =>{
    socket.emit("texto_digitado", textoEditor.value);// Cria um evento, emitindo o valor digitado
});

socket.on("texto_digitado_cliente", (texto) => {
    textoEditor.value = texto;
} );