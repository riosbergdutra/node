class Usuario {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.apresentar = "Oi, sou " + this.nome + "!"
    }


saudar() {
    console.log(this.apresentar)
}

verificaradulto() {
    return this.idade >= 18
}
}

const usuario1 = new Usuario("João", 25, "joao@gmail.com");

usuario1.saudar()
console.log(usuario1.nome); 
console.log(usuario1.idade);
console.log(usuario1.verificaradulto())
console.log(usuario1.email); 
