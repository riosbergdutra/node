const express = require("express");
const usuario = require("./routes/usuario.router");

const app = express();

const port = 4500;

app.use(express.json());

app.use("/usuario", usuario);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});