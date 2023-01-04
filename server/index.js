const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Ola")
})

// GUILHERME DO FUTURO EU ESTAVA TENTANDO FAZER NPM RUN DEV NESSE ARQUIVO 05/12

app.listen(3008, () => {
    console.log("Rodando servidor")
});