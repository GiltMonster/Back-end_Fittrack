const treinoModel = require('../models/treinoModel');

async function teste(req, res) {
    console.log('Teste de rota');
    return res.status(200).send('Teste de rota de treinos acessado com sucesso');
}

async function getTreino(req, res) {
    try {
        const resultado = await treinoModel.getTreino();
        return res.status(200).json(resultado);
    } catch (error) {
        console.error('Erro ao inserir novo treino:', error);
       return res.status(500).send({result: 'Erro interno do servidor'});
    }
 }

async function cadastraTreino(req, res) {
    const treino = req.body;
    console.log('Treino:', treino)

    if (!treino.idUsuario || !treino.data || !treino.duracao || !treino.nome || !treino.categoria) {
        return res.status(400).send({result: 'Todos os campos são obrigatórios'});
    } else {

        try {
            const resultado = await treinoModel.cadastraTreino(treino)
            console.log({result:'Novo treino inserido com sucesso. ID:'+ resultado.insertId});
            res.status(201).send({result:'Treino inserido com sucesso'});

        } catch (error) {
            console.error('Erro ao inserir novo treino:', error);
            res.status(500).send({result:'Erro interno do servidor'});
        }
    }
}

async function deletarTreino(req, res) {
    const id = req.params.id;
    console.log('ID do treino a ser deletado:', id);
    try {
        const resultado = await treinoModel.deletarTreino(id);
        console.log("Treino deletado com sucesso. Linhas afetadas:", resultado.affectedRows, "ID:", id);
        return res.status(200).send({result:'Treino deletado com sucesso'});
    } catch (error) {
        console.error('Erro ao deletar treino:', error);
        return res.status(500).send({result: 'Erro interno do servidor'});
    }
}

async function atualizarTreino(req, res) {
    const id = req.params.id;
    const novosDados = req.body;

    try{
        const resultado = await treinoModel.uptadeTreino(novosDados, id);
        console.log('Treino atualizado com sucesso. Linhas afetadas:', resultado.affectedRows);
        res.status(201).send({result:'Treino inserido com sucesso'});
    }catch(error){
        console.error('Erro ao atualizar treino:', error);
        return res.status(500).send({result: 'Erro interno do servidor'});
    }
}

module.exports = {
    teste,
    getTreino,
    cadastraTreino,
    deletarTreino,
    atualizarTreino
}