const con = require('../database/conexao');

function cadastrarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO usuario (nomeUsuario, sexoUsuario, pesoUsuario, alturaUsuario, objetivoUsuario) VALUES (?, ?, ?, ?, ?)';
        con.execute(query, [usuario.nome, usuario.sexo, usuario.peso, usuario.altura, usuario.objetivo], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function deletarUsuario(id) {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM usuario WHERE idUsuario = ?';
        con.execute(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                console.log('Usuário deletado com sucesso. Linhas afetadas:', results.affectedRows);
                resolve(results);
            }
        });
    });
}

function atualizarUsuario(id, novosDados) {
    
    return new Promise((resolve, reject) => {
        const query = 'UPDATE usuario SET nomeUsuario = ?, sexoUsuario = ?, pesoUsuario = ?, alturaUsuario = ?, objetivoUsuario = ? WHERE idUsuario = ?';
        con.execute(query, [novosDados.nome, novosDados.sexo, novosDados.peso, novosDados.altura, novosDados.objetivo, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    cadastrarUsuario,
    deletarUsuario,
    atualizarUsuario
};