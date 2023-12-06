const con = require('../database/conexao');

function getTreino() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Treino';
        con.execute(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function cadastraTreino(treino) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO Treino (Usuario_idUsuario, dataTreino, duracaoTreino, nomeTreino, categoriaTreino, conclusaoTreino) VALUES (?, ?, ?, ?, ?, ?);';
        con.execute(query, [treino.idUsuario, treino.data, treino.duracao, treino.nome, treino.categoria, treino.conclusao], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function deletarTreino(id) {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM Treino WHERE idTreino = ?';
        con.execute(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                console.log('Treino deletado com sucesso. Linhas afetadas:', results.affectedRows);
                resolve(results);
            }
        });

    });
}

function uptadeTreino(newData, id) {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE Treino SET Usuario_idUsuario = ?, dataTreino = ?, duracaoTreino = ?, nomeTreino = ?, categoriaTreino = ?, conclusaoTreino = ? WHERE idTreino = ?';
        con.execute(query, [newData.idUsuario, newData.data, newData.duracao, newData.nome, newData.categoria, newData.conclusao, id], (err, results) => {          
            if (err) {
                reject(err);
            } else {
                console.log('Treino atualizado com sucesso. Linhas afetadas:', results.affectedRows);
                resolve(results);
            }
        });
    });
}

module.exports = {
    getTreino,
    cadastraTreino,
    deletarTreino,
    uptadeTreino
}