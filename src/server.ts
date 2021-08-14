import express from "express"


const app = express();

/*
*Métodos de Rota
    * GET     => Buscar uma informação
    * POST    => Inserir (Criar) uma informação
    * PUT     => Alterar uma informação
    * DELETE  => Remover uma informação
    * PATCH   => Alterar uma informação específica

*/

/* 
* Tipos de parâmetros
    * Routes params => http://localhost:3000/produtos/23432749823
    * Query Params  => http://localhost:3000/produtos?name=teclado&description=tecladobom
    * Body Params   => {
    *   "name" : "teclado",
    *   "description" : "teclado bom"
    * }
        * Body Params não são usados no método GET   
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