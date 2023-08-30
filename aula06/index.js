const pesssoa = {
    nome: "Leonardo",
    sobrenome: "Orabona",
    alert: 1.88,
    idade: 25,

    envelhecer: function(anos){
        this.idade += anos
    }
}

console.log(typeof(pesssoa))
console.log(pesssoa)
console.log(pesssoa.nome)
pesssoa.envelhecer(3)
console.log(pesssoa.idade)