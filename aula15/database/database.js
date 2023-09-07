const mongoose = require("mongoose")

function connectToDataBase() {
    mongoose.connect('mongodb://localhost:27017/teste', {
    useNewUrlParser: true,
    useUnifiedTopology: true,  // Correção aqui
}).then(() => {
    console.log("MongoDB conectato");
}).catch((err) => {
    return console.log(`Erro na conexão com o banco ${err}`);
});
}

module.exports = connectToDataBase