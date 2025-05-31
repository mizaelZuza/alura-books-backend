const { Router } = require("express");
const { getLivros, pegarLivro, inserirLivro, atualizarInfoLivro, deletarLivro } = require("../controladores/controladoresLivro.js");

const router = Router();

router.get("/livros", getLivros)

router.get("/livros/:id", pegarLivro)

router.post("/livros", inserirLivro)

router.patch("/livros/:id", atualizarInfoLivro)

router.delete("/livros/:id", deletarLivro)


module.exports = router;