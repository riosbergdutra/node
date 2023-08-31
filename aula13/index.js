const express = require("express");

const app = express();

const port = 3000;

app.use(express.json())

app.get("/", (req,res)=> {
    res.send("nosso contato email@email.com")
})

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})