const con = require('../database/conexao');

function getUser() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Usuario';
        con.execute(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function cadastrarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO Usuario (nomeUsuario, sexoUsuario, avatarUsuario, pesoUsuario, alturaUsuario, objetivoUsuario) VALUES (?, ?, ?, ?, ?, ?)';
        con.execute(query, [usuario.nome, usuario.sexo, usuario.avatar, usuario.peso, usuario.altura, usuario.objetivo], (err, results) => {
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
        const query = 'DELETE FROM Usuario WHERE idUsuario = ?';
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
        const query = 'UPDATE Usuario SET nomeUsuario = ?, sexoUsuario = ?, avatarUsuario = ?, pesoUsuario = ?, alturaUsuario = ?, objetivoUsuario = ? WHERE idUsuario = ?';
        con.execute(query, [novosDados.nome, novosDados.sexo, novosDados.avatar, novosDados.peso, novosDados.altura, novosDados.objetivo, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getUser,
    cadastrarUsuario,
    deletarUsuario,
    atualizarUsuario
};