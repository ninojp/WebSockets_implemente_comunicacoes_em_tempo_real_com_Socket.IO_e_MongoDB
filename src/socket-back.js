"use strict";
import io from "./servidor.js";
//--------------------------------------------------------------------
const documentos = [
    {
        nome: "JavaScript",
        texto: "Texto de JavaScript..."
    },
    {
        nome: "Node",
        texto: "Texto de Node.js..."
    },
    {
        nome: "Socket.io",
        texto: "Texto de Socket.IO..."
    }
]
//-------------------------------------------------------------------
io.on("connection", (socket) => {
    console.log("Um cliente se conectou!", socket.id);
    //O Método .on() é usado para escutar(listen) os eventos na comunicação socket(client-servidor)
    //-------------------------------------------------------------------------------------------- 
    socket.on("disconnect", (motivo) => {
        console.log(`O Cliente ID: ${socket.id}, foi desconectado!
        Motivo: ${motivo}`);
    });
    //--------------------------------------------------------------------------------------------
    socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento);
        const documento = encontrarDocumento(nomeDocumento);
        if(documento){
            // socket.emit("texto_documento", documento.texto);
            devolverTexto(documento.texto);
        }
    });
    //--------------------------------------------------------------------------------------------
    socket.on('texto_digitado', ({texto, nomeDocumento}) => {
        //Servidor emitindo o evento para TODOS
        // io.emit("texto_digitado_cliente", texto);
        //------------------------------------------
        //Socket emitindo o evento para todos EXCETO para quem emitiu
        // socket.broadcast.emit("texto_digitado_cliente", texto);
        //--------------------------------------------------------
        const documento = encontrarDocumento(nomeDocumento);
        if(documento){
            documento.texto = texto;
            //Socket emitindo o evento para a sala(room)
            socket.to(nomeDocumento).emit("texto_digitado_cliente", texto);
        }
    });
});
//-------------------------------------------------------------------------
function encontrarDocumento(nome){
    const documento = documentos.find((documento) => {
        return documento.nome === nome;
    });
    return documento;
}

