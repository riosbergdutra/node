const fs = require("fs");

// fs.writeFile("./files/arquivo.txt", "esse é o meu primeiro arquivo", function(err){
//     if(err) {
//         return console.log(`algo deu errado ${err}`)
//     }
// })

// fs.readFile("./files/arquivo.txt","utf-8", function(err,data){
//     if(err) {
//         return console.log(`algo deu errado ${err}`)
//     }

//     console.log(data)
// })

// fs.rename("./files/arquivo.txt","./files/novo-nome.txt", function(err){
//     if(err) {
//         return console.log(`algo deu errado ${err}`)
//     }
//     console.log("renomeado com sucesso")
// })

fs.unlink("./files/novo-nome.txt", function(err){
   if(err) {
    return console.log (`algo deu errado ${err}`)   
   }
})