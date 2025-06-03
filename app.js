const express = require("express");
const rotaLivro = require("./rotas/rotasLivro.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));
const PORT = 8000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});

app.use("/", rotaLivro)

