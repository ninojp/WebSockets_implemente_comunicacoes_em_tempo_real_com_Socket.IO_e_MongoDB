"use strict";
import express from "express";//Módulo externo
import url from "url";//Módulo interno, Node.js
import path from "path";//Módulo interno, Node.js
import http from "http";//Módulo interno, Node.js
import { Server } from "socket.io";

const app = express();

const porta = process.env.porta || 3000;
//url.fileURLToPath(import.meta.url), pega o caminho atual(absoluto) até este arquivo
const caminhoAtual = url.fileURLToPath(import.meta.url);
// console.log(caminhoAtual);
const diretorioPublico = path.join(caminhoAtual, "../../", "public");
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(porta, () => console.log(`Servidor escutando na porta: ${porta}`));

const io = new Server(servidorHttp);

export default io;