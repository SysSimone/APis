const express = require('express') //chamando o módulo  do express e guardando nessa constante 

const app = express() // aqui estou inicializando essa constante, inicializando o express

app.listen(3000) /// o listen ouve o navegador e quando eu entrar na porta 3.000 ele joga la pra dentro o que eu quiser.


// a barra / representa a rota
// .GET buscar/pegar
// .SEND enviar
app.route('/').get((req,res) =>res.send("hello")) // caminho que o site vai fazer