const express = require("express");
const rotaLivro = require("./rotas/rotasLivro.js");

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});

app.use("/", rotaLivro)

