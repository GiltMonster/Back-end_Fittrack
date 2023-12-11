const con = require('../database/conexao');

function getExercicio() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Exercicio';
        con.execute(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function getExerciciosPeloTreino(id) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Exercicio WHERE Exercicio.Treino_idTreino = ?';
        con.execute(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function cadastrarExercicio(exercicio) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO Exercicio (Treino_idTreino, repeticoesExercicio, serieExercicio, nomeExercicio, cargaExercicio) VALUES (?, ?, ?, ?, ?)';
        con.execute(query, [exercicio.idTreino, exercicio.repeticoes, exercicio.serie, exercicio.nome, exercicio.carga], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function deletarExercicio(id) {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM Exercicio WHERE idExercicio = ?';
        con.execute(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                console.log('Exercicio deletado com sucesso. Linhas afetadas:', results.affectedRows);
                resolve(results);
            }
        });
    });
}

function atualizarExercicio(id, novosDados) {
    
    return new Promise((resolve, reject) => {
        const query = 'UPDATE Exercicio SET Treino_idTreino = ?, repeticoesExercicio = ?, serieExercicio = ?, nomeExercicio = ?, cargaExercicio = ? WHERE idExercicio = ?';
        con.execute(query, [novosDados.idTreino, novosDados.repeticoes, novosDados.serie, novosDados.nome, novosDados.carga, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getExercicio,
    getExerciciosPeloTreino,
    cadastrarExercicio,
    deletarExercicio,
    atualizarExercicio
};