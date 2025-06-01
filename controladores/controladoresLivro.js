const fs = require("fs");
const { pegarTodosOsLivros, pegarLivroPorId, inserirUmNovoLivro, atualizarUmLivro, deletarUmLivro } = require("../servicos/servicosLivro.js");
const { erroValidacaoIdLivro, erroValidacaoBodyLivro } = require("../erros/erroValidacaoDadosLivro.js");
function getLivros(req, res) {
    try {
        const livros = pegarTodosOsLivros();
        res.status(200).send(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function pegarLivro(req, res) {
    try {
        const id = req.params.id;

        if (!id || !Number(id)) {
            return erroValidacaoIdLivro(res, id);
        } else {
            const livro = pegarLivroPorId(id);
            res.status(200).send(livro);
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

function inserirLivro(req, res) {
    try {

        const livro = req.body;

        if (!livro.id || !Number(livro.id)) {
            return erroValidacaoIdLivro(res, livro.id);
        } else if (!livro.nome) {
            return erroValidacaoBodyLivro(res, livro);
        } else {
            inserirUmNovoLivro(livro);
            res.status(201).send("Livro inserido com sucesso!");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

function atualizarInfoLivro(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        if (!id || !Number(id)) {
            return erroValidacaoIdLivro(res, id);
        } else if (!req.body.nome) {
            return erroValidacaoBodyLivro(res, req.body);
        } else {
            atualizarUmLivro(body, id);
            res.status(200).send("Livro atualizado com sucesso!");
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deletarLivro(req, res) {
    try {
        const id = req.params.id;

        if (!id || !Number(id)) {
            return erroValidacaoIdLivro(res, id);
        } else {
            deletarUmLivro(id);
            res.status(200).send("Livro deletado com sucesso!");
        }

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