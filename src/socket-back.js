"use strict";
import {obterDocumentos, encontrarDocumento, atualizaDocumento} from "./documentosDb.js";
import io from "./servidor.js";

//-------------------------------------------------------------------
//O Método .on() é usado para escutar(listen) os eventos na comunicação socket(client-servidor)
io.on("connection", (socket) => {
    socket.on("obter_documentos", async (devolverDocumentos)=>{
        const documentos = await obterDocumentos();
        devolverDocumentos(documentos);
    });

    //--------------------------------------------------------------------------------------------
    console.log("Um cliente se conectou!", socket.id); 
    socket.on("disconnect", (motivo) => {
        console.log(`O Cliente ID: ${socket.id}, foi desconectado!
        Motivo: ${motivo}`);
    });
    //--------------------------------------------------------------------------------------------
    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento);
        const documento = await encontrarDocumento(nomeDocumento);
        // console.log(documento);
        if(documento){
            // socket.emit("texto_documento", documento.texto);
            devolverTexto(documento.texto);
        }
    });
    //--------------------------------------------------------------------------------------------
    socket.on('texto_digitado', async ({texto, nomeDocumento}) => {
        //Servidor emitindo o evento para TODOS
        // io.emit("texto_digitado_cliente", texto);
        //------------------------------------------
        //Socket emitindo o evento para todos EXCETO para quem emitiu
        // socket.broadcast.emit("texto_digitado_cliente", texto);
        //--------------------------------------------------------
        const atualizacao = await atualizaDocumento(nomeDocumento, texto);
        // console.log(atualizacao);
        if(atualizacao.modifiedCount){
            //Socket emitindo o evento para a sala(room)
            socket.to(nomeDocumento).emit("texto_digitado_cliente", texto);
        }
    });
});


