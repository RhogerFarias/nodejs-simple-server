// requisição do express
const express = require("express");

//iniciando o express como servidor
const server = express();

//construindo uma rota - get = recebe
server.get("/hello", (req, res) => { //req = requisição ; res = resposta
    //resposta para o browser
   // return res.send("Hello World");

   //resposta para o browser em JSON
   return  res.json({ 
    title: "Hello World",
    message: "mensagem 1"
    });
});

// no outro browser pode chamar isso fazendo apenas:
// json['title]
// -> "Hello World"


//selecionando a porta - geralmente 3000, 5000, 8000, 8080 
server.listen(3000);

