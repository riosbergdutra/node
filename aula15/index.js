const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 4500;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/mongo",  (req, res) => {
    // Conectar ao MongoDB
     mongoose.connect('mongodb://localhost:27017/teste-gatos')
      

    // Definir o esquema do gato
    const gatoSchema = new mongoose.Schema({
      nome: String,
      idade: Number,
      genero: String,
      porte: String,
      peso: Number,
      docil: Boolean,
    });

    // Criar o modelo de Gato
    const Cat = mongoose.model('Gato', gatoSchema);

    // Dados do gato
    const gato = {
      nome: "Josias",
      idade: 4,
      genero: "M",
      porte: "Pequeno",
      peso: 4.3,
      docil: true,
    };

    // Criar uma instância do gato
    const kitty = new Cat(gato);

    // Salvar o gato no banco de dados
     kitty.save().then(() => console.log("Gatinho salvo"));
     res.send("gatinho salvo com sucesso")
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});