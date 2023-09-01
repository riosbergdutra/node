const express = require("express");
const app = express();
const request = require("request");


const port = 4500;

app.use(express.json())


app.get("/", (req,res)=> {
    const url = req.body.url

    request(url, function(error, response, body) {
        console.log('statusCode:', response && response.statusCode)
        const pokemon = JSON.parse(body)
        res.send(pokemon)
        
        console.log(pokemon.id)
        console.log(pokemon.name)
        console.log(pokemon.height)
        console.log(pokemon.weigth)
        console.log(pokemon.types)

    })
})

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})