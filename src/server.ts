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

/*
* Tipos implementação de Banco de Dados
    * Driver nativo de banco de dados: MongoDB, MySQL, Postgres
        * Requer mais conhecimento de SQL
        * Caso comece a usar um e resolva migrar para outro, dará trabalho
    * Query Builder: Knex.js
        * Ainda requer conhecimento de SQL
        * Facilita migração de banco de dados
    * ORM: Sequelize, TypeORM, Prisma
        * Object Relational Map
        * Frameworks que pegam o código escrito e transformam ele para algo que o banco de dados consiga ler.
        * É um mapeamento entre a entidade e o objeto
        * Permite, por exemplo, que uma classe seja reconhecida como uma tabela, e seus atributos como atributos de tabela
        * Requer menos conhecimento de SQL
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