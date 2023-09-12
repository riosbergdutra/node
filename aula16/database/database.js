const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect('mongodb+srv://riosbergduttra:ITT4NWvq89BBJQS6@usuarios.ukk0efb.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MONGO DB CONECTADO");
  }).catch((err) => {
    console.error(`Erro na conexão com o banco de dados: ${err}`);
  });
}

module.exports = connectToDatabase;




