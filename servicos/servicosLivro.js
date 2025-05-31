const fs = require("fs");

function pegarTodosOsLivros () {
    return JSON.parse(fs.readFileSync("./livros.json"));
};

function pegarLivroPorId (id) {
    const livros = pegarTodosOsLivros();
    const livro = livros.filter(livro => livro.id == id);
    return livro[0];
    
};

function inserirUmNovoLivro (livro) {
    const livros = pegarTodosOsLivros();
    const novaListaDeLivros = [...livros, livro];
    fs.writeFileSync("./livros.json", JSON.stringify(novaListaDeLivros));
};

function atualizarUmLivro(modificacao, id){
    let livros = pegarTodosOsLivros();
    let indiceParaAlterar = livros.findIndex(livro => livro.id == id);

/** o spread ...livros esta pegando o elemento que queremos alterar com base no indice informado no findIndex,
    a propriedade ...modificacao esta transformando o objeto modificado em um objeto literal
    Esse trecho de código com dois spreads transforma o objeto modificado em um objeto literal comparando os dois 
    objetos e fazendo a alteração. 
    OBS: se a chave do objeto modificado nao existir no objeto literal, ele será adicionado. Se existir, 
    ele será sobrescrito.
 */

    const livroAlterado = { ...livros[indiceParaAlterar], ...modificacao}
    livros[indiceParaAlterar] = livroAlterado;
    fs.writeFileSync("./livros.json", JSON.stringify(livros));

}

function deletarUmLivro(id){
    let livros = pegarTodosOsLivros();
    livros = livros.filter(livro => livro.id != id);
    fs.writeFileSync("./livros.json", JSON.stringify(livros));
}


module.exports = {
    pegarTodosOsLivros,
    pegarLivroPorId,
    inserirUmNovoLivro,
    atualizarUmLivro,
    deletarUmLivro
}