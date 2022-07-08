var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '', // IP do Host
      user : '', // User do MYSQL
      password : '', //COLOCAR A SENHA NA HORA DE RODAR
      database : '' // Banco de dados no MYSQL
    }
  });

module.exports = knex;