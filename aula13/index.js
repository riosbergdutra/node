const express = require("express");
const empresa = require("./router/empresa.router");
const app = express();


const port = 3000;

app.use(express.json())

app.use("/empresa",empresa)

app.get("/", (req,res)=> {
    res.send("hello world")
})

app.get("/contato", (req,res)=> {
    res.send("nosso contato email@email.com")
})

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})