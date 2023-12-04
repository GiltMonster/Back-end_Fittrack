const descricaoExercicioModel = require('../models/descricaoExercicioModel');

async function teste(req, res) {
    console.log('Teste de rota');
    return res.status(200).send('Teste de rota de descricaoExercicio acessado com sucesso');
}

async function getDescricaoExercicio(req, res) {
    try {
        const resultado = await descricaoExercicioModel.getDescricaoExercicio();
        return res.status(200).json(resultado);
    } catch (error) {
        console.error('Erro ao inserir novo descricaoExercicio:', error);
        return res.status(500).send('Erro interno do servidor');
    }
}

async function cadastrarDescricaoExercicio(req, res) {
    const descricaoExercicio = req.body;

    // Validação dos campos obrigatórios
    if (!descricaoExercicio.idExercicio || !descricaoExercicio.idTreino || !descricaoExercicio.descricao) {
        res.status(400).send('Todos os campos são obrigatórios');
        return;
    }

    try {
        const resultado = await descricaoExercicioModel.cadastrarDescricaoExercicio(descricaoExercicio);
        console.log('Novo descricaoExercicio inserido com sucesso. ID:', resultado.insertId);
        res.status(201).send('DescricaoExercicio inserido com sucesso');
    } catch (error) {
        console.error('Erro ao inserir novo descricaoExercicio:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

async function deletarDescricaoExercicio(req, res) {
    const id = req.params.id;

    // Validação dos campos obrigatórios
    if (!id) {
        res.status(400).send('Passar o ID do descricaoExercicio é obrigatório para deletá-lo');
        return;
    }

    try {
        const resultado = await descricaoExercicioModel.deletarDescricaoExercicio(id);
        res.status(201).send('DescricaoExercicio deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar descricaoExercicio:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

async function atualizarDescricaoExercicio(req, res) {
    const id = req.params.id;
    const novosDados = req.body;

    // Validação dos campos obrigatórios
    if (!id) {
        res.status(400).send('Passar o ID do descricaoExercicio é obrigatório para atualizá-lo');
        return;
    }

    try {
        const resultado = await descricaoExercicioModel.atualizarDescricaoExercicio(id, novosDados);
        res.status(201).send('DescricaoExercicio atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar descricaoExercicio:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

module.exports = {
    teste,
    getDescricaoExercicio,
    cadastrarDescricaoExercicio,
    deletarDescricaoExercicio,
    atualizarDescricaoExercicio
}