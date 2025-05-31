const fs = require("fs");
const { pegarTodosOsLivros, pegarLivroPorId, inserirUmNovoLivro, atualizarUmLivro, deletarUmLivro } = require("../servicos/servicosLivro.js");
function getLivros (req, res) {
    try {
        const livros = pegarTodosOsLivros();
        res.status(200).send(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function pegarLivro (req, res) {
    try {
        const id = req.params.id;
        const livro = pegarLivroPorId(id);
        res.status(200).send(livro);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function inserirLivro (req, res){
    try {
        const livro = req.body;
        inserirUmNovoLivro(livro);
        res.status(201).send("Livro inserido com sucesso!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function atualizarInfoLivro(req, res){
    try {
        const id = req.params.id;
        const body = req.body;
        atualizarUmLivro(body, id);
        res.status(200).send("Livro atualizado com sucesso!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deletarLivro(req, res){
    try {
        const id = req.params.id;
        deletarUmLivro(id);
        res.status(200).send("Livro deletado com sucesso!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getLivros,
    pegarLivro,
    inserirLivro,
    atualizarInfoLivro,
    deletarLivro
}