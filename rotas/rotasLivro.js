const { Router } = require("express");
const { getLivros } = require("../controladores/controladoresLivro.js");

const router = Router();

router.get("/livros", getLivros)

router.post("/livros", (req, res) => {
    res.send("Você fez uma resquisição do tipo POST!");
})

router.patch("/livros", (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH!");
})

router.delete("/livros", (req, res) => {
    res.send(" você fez uma requisição do tipo DELETE!");
})


module.exports = router;