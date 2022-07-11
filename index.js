
//server
const express = require('express') //chamando o módulo  do express e guardando nessa constante 

const app = express() // aqui estou inicializando essa constante, inicializando o express

app.listen(3000) /// o listen ouve o navegador e quando eu entrar na porta 3.000 ele joga la pra dentro o que eu quiser.

//middleware

app.use(express.json()) //metodo dentro do express

// a barra / representa a rota
// .GET buscar/pegar
// .SEND enviar
//app.route('/').get((req,res) =>res.send("hello")) // caminho que o site vai fazer
// tudo o que é enviado dentro do .Post é recebido dentro do req.
// o navegador n consegue fazer o .Post, apenas o .GET, vou usar o insomnia
//app.route('/').post ((req,res) => console.log(req.body))

//quando eu recebo algo na API eu preciso falar para o nosso conteudo que o que estou recebendo é um JSON, para isso vamos usar o:
//o insomnia vai olhar a rota /, depois procura por um metodo igual ao pedido, antes de executar ele vai pegar o conteudo que ele trouxe da requisição e vai passar pelo middleware, tipo isso

//todo o método acima o resultado da requisição saiu no console do terminal = Console.log, o metodo abaixo na resposta da API sairá o meu conteudo;. 

//o res.send envia a resposta e o req.body pega o corpo da requisição e envia para o send
app.route('/').post ((req,res) => res.send(req.body))