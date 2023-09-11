const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect('mongodb://localhost:27017/usuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MONGO DB CONECTADO");
  }).catch((err) => {
    console.error(`Erro na conexão com o banco de dados: ${err}`);
  });
}

module.exports = connectToDatabase;




