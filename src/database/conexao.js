const mysql = require('mysql2');

const con = mysql.createConnection({
    host: '127.0.0.1', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user
    password: 'van182210', // A senha do usuário. Ex: user123
    database: 'herdeiros', // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
    port: 3306              // Porta padrão do MySQL
  });
  
  con.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao MySQL:', err);
    } else {
      console.log('Conectado ao MySQL');
    }
  });
  
  module.exports = con;