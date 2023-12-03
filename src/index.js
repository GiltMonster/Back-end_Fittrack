const mysql = require('mysql2');
const express = require('express');

const app = express();
const PORT = 3000;

const con = mysql.createConnection({
  host: '127.0.0.1', // O host do banco. Ex: localhost
  user: 'root', // Um usuário do banco. Ex: user
  password: '****', // A senha do usuário. Ex: user123
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

app.get('/usuario', (req, res) => {
  const query = 'SELECT * FROM usuario';

  con.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.json(results);
    }
  });
});

app.use(express.json());
app.post('/cadastraUsuario', (req, res) => {
  const usuario = req.body;
  console.log(req.body);

  const query = 'INSERT INTO usuario (nomeUsuario, sexoUsuario, pesoUsuario, alturaUsuario, objetivoUsuario) VALUES (?, ?, ?, ?, ?)'; // O ? indica um valor que será preenchido depois

  con.execute(query, [usuario.nome, usuario.sexo, usuario.peso, usuario.altura, usuario.objetivo], (err, results) => {
    if (err) {
      console.error('Erro ao inserir novo usuário:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      console.log('Novo usuário inserido com sucesso. ID:', results.insertId);
      res.status(201).send('Usuário inserido com sucesso');
    }
  });
});

app.delete('/usuario/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM usuario WHERE idUsuario = ?';

  con.execute(query, [id], (err, results) => {
    if (err) {
      console.error('Erro ao deletar o usuário:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      console.log('Usuário deletado com sucesso. Linhas afetadas:', results.affectedRows);
      res.status(200).send('Usuário deletado com sucesso');
    }
  });
});

// Rota para atualizar um usuário pelo ID
app.use(express.json());
app.put('/atualizaUsuario/:id', (req, res) => {
  const idUsuario = req.params.id;
  const novosDados = req.body;

  const query = 'UPDATE usuario SET nomeUsuario = ?, sexoUsuario = ?, pesoUsuario = ?, alturaUsuario = ?, objetivoUsuario = ? WHERE idUsuario = ?';

  con.execute(
    query, [novosDados.nome, novosDados.sexo, novosDados.peso, novosDados.altura, novosDados.objetivo, idUsuario],
    (err, results) => {
      if (err) {
        console.error('Erro ao atualizar usuário:', err);
        res.status(500).send('Erro interno do servidor');
      } else {
        console.log('Usuário atualizado com sucesso.');
        res.status(200).send('Usuário atualizado com sucesso');
      }
    }
  );
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});