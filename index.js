const restify = require('restify');
const errs = require("restify-errors");
var database = require('./database')
const dadoss = require('./dadoss.json');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8080, ()=>{console.log("Running successfully!");});

// INSERINDO JSON NO BANCO DE DADOS
database.insert(dados).into('jogos').then(data =>{
  console.log(data);
}).catch(err =>{
  console.log(err);
})

// SELECT
knex.select().table('jogos').then(dados => {
    console.log(dados);
}).catch(err => {
    console.log(err);
});

/*
knex.raw('SELECT * from jogos').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});*/

// DELETANDO POR ID
database.where({id:  x/*adicione o id lugar de x*/}).delete().table("jogos").then(data=>{
  console.log(data);
}).catch(err =>{
  console.log(err);
})

// ATUALIZAR POR ID
database.where({id: x/*adicione o id no lugar de x*/ }).update({/* nome: , preco: , ano: */}).table("jogos").then(data=>{
  console.log(data);
}).catch(err =>{
  console.log(err);
})

/* ROTAS REST with POSTMAN

server.get('/', (req, res, next) => {

    knex('jogos').then((dados)=>{
        res.send(dados);
    }, next)
});

server.get('/jogo/:id', (req, res, next) => {
  const {id} = req.params;
  knex('jogos')
    .where('id',id)
    .first()
    .then((dados)=>{
      if(!dados) return res.send(new errs.BadRequestError('Nada foi encontrado.'))
      res.send(dados);
  }, next)
});

server.post('/adicionar', (req, res, next) => {

    knex('jogos')
    .insert(req.body)
    .then((dados) => {
        res.send(dados);
    }, next)
});

server.put('/editar/:id', (req, res, next) => {
  const {id} = req.params;
  knex('jogos')
    .where('id',id)
    .update(req.body)
    .then((dados)=>{
      if(!dados) return res.send(new errs.BadRequestError('Dados atualizados.'))
      res.send(dados);
  }, next)
});

server.del('/excluir/:id', (req, res, next) => {
  const {id} = req.params;
  knex('jogos')
    .where('id',id)
    .delete()
    .then((dados)=>{
      if(!dados) return res.send(new errs.BadRequestError('Dados excluídos.'))
      res.send(dados);
  }, next)

}); */