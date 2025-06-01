
function erroValidacaoIdLivro (res, id) {
    return res.status(422).send(`Id: --> ${id} <-- inválido. O id do livro deve ser um inteiro maior que zero.`);
}

function erroValidacaoBodyLivro (res, body) {
    return res.status(422).send(`Body: --> ${body} <-- inválido. O body deve ser um objeto com as seguintes propriedades: id, nome.`);
}

module.exports = {
    erroValidacaoIdLivro,
    erroValidacaoBodyLivro
}