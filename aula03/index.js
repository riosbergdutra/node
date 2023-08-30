const { hello, somar } = require("./funcoes").default;

console.log(hello());

const resultado = somar(12,8);

console.log (resultado);

const resultado2 = somar("olá ", "pessoal")
console.log (resultado2)