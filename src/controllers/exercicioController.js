const exercicioController = require('../models/exerciciosModule'); // Importa o módulo de exercicio

async function teste(req, res) {
    console.log('Teste de rota');
    return res.status(200).send('Teste de rota de exercicio acessado com sucesso');
}

async function getExercicio(req, res) {
    try {
        const resultado = await exercicioController.getExercicio();
        return res.status(200).json(resultado);
    } catch (error) {
        console.error('Erro ao inserir novo exercicio:', error);
        return res.status(500).send({result: 'Erro interno do servidor'});
    }
}

async function getExerciciosPeloTreino(req, res) {
    const id = req.params.id;

    try {
        const resultado = await exercicioController.getExerciciosPeloTreino(id);
        return res.status(200).json(resultado);
    } catch (error) {
        console.error('Erro ao inserir novo exercicio:', error);
        return res.status(500).send({result: 'Erro interno do servidor'});
    }
}

async function cadastrarExercicio(req, res) {
    const exercicio = req.body;

    // Validação dos campos obrigatórios
    if (!exercicio.idTreino || !exercicio.repeticoes || !exercicio.serie || !exercicio.nome || !exercicio.carga) {
        res.status(400).send({result:'Todos os campos são obrigatórios'});
        return;
    }

    try {
        const resultado = await exercicioController.cadastrarExercicio(exercicio);
        console.log('Novo exercicio inserido com sucesso. ID:', resultado.insertId);
        return res.status(200).json(resultado);
    } catch (error) {
        console.error('Erro ao inserir novo exercicio:', error);
        res.status(500).send({result: 'Erro interno do servidor'});
    }
}

async function deletarExercicio(req, res) {
    const id = req.params.id;

    // Validação dos campos obrigatórios
    if (!id) {
        return res.status(400).send('Passar o ID do exercicio é obrigatório para deletá-lo');
    }

    try {
        const resultado = await exercicioController.deletarExercicio(id);
        res.status(201).send('Exercicio deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar exercicio:', error);
        res.status(500).send({result: 'Erro interno do servidor'});
    }
}

async function atualizarExercicio(req, res) {
    const id = req.params.id;
    const novosDados = req.body;

    // Validação dos campos obrigatórios
    if (!id) {
        return res.status(400).send('Passar o ID do exercicio é obrigatório para atualizá-lo');
    }

    try {
        const resultado = await exercicioController.atualizarExercicio(id, novosDados);
        res.status(201).send('Exercicio atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar exercicio:', error);
        res.status(500).send({result: 'Erro interno do servidor'});
    }
}

module.exports = {
    teste,
    getExercicio,
    getExerciciosPeloTreino,
    cadastrarExercicio,
    deletarExercicio,
    atualizarExercicio
}