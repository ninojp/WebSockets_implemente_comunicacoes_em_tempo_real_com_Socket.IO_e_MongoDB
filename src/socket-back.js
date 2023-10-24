"use strict";
import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou!", socket.id);
    //O Método .on() é usado para escutar(listen) os eventos na comunicação socket(client-servidor) 
    socket.on('texto_digitado', (texto) =>{
        // io.emit("texto_digitado_cliente", texto);//Emite o evento para TODOS
        //Emite o evento para todos EXCETO, para quem emitiu
        socket.broadcast.emit("texto_digitado_cliente", texto);
    });
});