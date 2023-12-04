const mysql = require('mysql2');
require('dotenv').config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const port = process.env.PORT;


const con = mysql.createConnection({
    host, // O host do banco. Ex: localhost
    user, // Um usuário do banco. Ex: user
    password, // A senha do usuário. Ex: user123
    database, // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
    port // Porta padrão do MySQL
  });
  
  con.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao MySQL:', err);
    } else {
      console.log('Conectado ao MySQL');
    }
  });
  
  module.exports = con;