import express from "express"


const app = express();

/*

GET     => Buscar uma informação
POST    => Inserir (Criar) uma informação
PUT     => Alterar uma informação
DELETE  => Remover uma informação
PATCH   => Alterar uma informação específica

*/


app.get("/test", (request, response) => {
    // Request  => Entrando
    // Response => Saindo

    return response.send("Olá NLW");
})

app.post("/test-post", (request, response) =>{
    return response.send("Olá NLW post");
})

// http://localhost:3000
app.listen(3000, () => console.log("server is running NLW"));