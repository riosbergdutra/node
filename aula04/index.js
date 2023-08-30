const fs = require("fs");

fs.writeFile("./files/arquivo.txt", "esse é o meu primeiro arquivo", function(err){
    if(err) {
        return console.log(`algo deu errado ${err}`)
    }
})