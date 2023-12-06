const con = require('../database/conexao');

function getDescricaoExercicio() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM descricaoExercicio';
        con.execute(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function cadastrarDescricaoExercicio(descricaoExercicio) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO descricaoExercicio ( Exercicio_idExercicio, Exercicio_Treino_idTreino, descricaoExercicio ) VALUES (?, ?, ?)';
        con.execute(query, [descricaoExercicio.idExercicio, descricaoExercicio.idTreino, descricaoExercicio.descricao], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function deletarDescricaoExercicio(id) {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM descricaoExercicio WHERE idDescricaoExercicio = ?';
        con.execute(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                console.log('DescricaoExercicio deletado com sucesso. Linhas afetadas:', results.affectedRows);
                resolve(results);
            }
        });
    });
}

function atualizarDescricaoExercicio(id, novosDados) {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE descricaoExercicio SET Exercicio_idExercicio = ?, Exercicio_Treino_idTreino = ?, descricaoExercicio = ? WHERE idDescricaoExercicio = ?';
        con.execute(query, [novosDados.idExercicio, novosDados.idTreino, novosDados.descricao, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getDescricaoExercicio,
    cadastrarDescricaoExercicio,
    deletarDescricaoExercicio,
    atualizarDescricaoExercicio
}