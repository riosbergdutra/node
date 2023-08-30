class pessoa{
    constructor(nome, idade, altura, genero){
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this.genero = genero
    }
    nomeIdade = function() {
        return this.nome + " " + this.idade
    }
}



class professor extends pessoa {
    constructor(nome, idade, altura, genero, salario, turmas){
        super(
        nome,
        idade,
        altura,
        genero
        )
        this.salario = salario
        this.turmas = turmas
    }
}
const prof = new professor("Leandro", 24,1.88,"M",100000,16)
console.log(prof)