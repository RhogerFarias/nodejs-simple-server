/*
// requisição do express
const express = require("express");
//iniciando o express como servidor
const server = express();

// Query é consulta
// Query params = ?nome=Rhoger&idade=23

// Route é rota
// Route params = /hello/:nome 

// http://localhost:3000/hello/?nome=Rhoger&idade=23


//construindo uma rota - get = recebe
server.get("/hello", (req, res) => { 
    //req = requisição ; res = resposta
    
    //como capturar um parametro de query
    //const nome = req.query.nome;
//ou    
    const { nome, idade } = req.query;

    //resposta para o browser
   // return res.send("Hello World");

   //resposta para o browser em JSON
   return  res.json({ 
    title: "Hello World",
    message: `Olá ${nome}, de ${idade} anos de idade, tudo bem??`
    });
});

// acessando outra rota no mesmo servidor
// http://localhost:3000/hello/Rhoger
// Route params = /hello/:nome


server.get("/hello/:nome/:idade", (req, res) => {
    const {nome, idade} = req.params;

    return  res.json({ 
        title: "Hello World",
        message: `Olá ${nome}, ${idade}, anos`
    });
});


// no outro browser pode chamar isso fazendo apenas:
// json['title]
// -> "Hello World"


//selecionando a porta - geralmente 3000, 5000, 8000, 8080 
server.listen(3000);
*/


//criação e inicialização do express como servidor
const express = require("express");
const server = express();

//express.json()
server.use(express.json());

//um array de customers
let customers = [
    { id: 1, name: "Rhoger Site", site: "http://rhogersite.com.br"},
    { id: 2, name: "Google", site:"http://google.com"},
    { id: 3, name: "UOL", site:"http://uol.com.br"}
];

//criação de rota de listagem
server.get("/customers", (req, res) =>{
    return res.json(customers);
});

server.get("/customers/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404; //se o customer existir = 200 se não = 404
    
    return res.status(status).json(customer);
});





server.listen(3000);