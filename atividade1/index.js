class Usuario {
    constructor(nome, dataNascimento, email, senha) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.senha = senha;
        this.apresentar = "Oi, sou " + this.nome + "!";
    }

    saudar() {
        console.log(this.apresentar);
    }

    verificarAdulto() {
        const hoje = new Date();
        const anoAtual = hoje.getFullYear();
        const anoNascimento = this.dataNascimento.getFullYear();
        const idade = anoAtual - anoNascimento;
        return idade >= 18;
    }
}

const usuario1 = new Usuario("João", new Date(1995, 5, 15), "joao@gmail.com", "minhasenha");

usuario1.saudar();
console.log(usuario1.nome);
console.log(usuario1.dataNascimento); // Deve mostrar a data de nascimento completa
console.log(usuario1.verificarAdulto());
console.log(usuario1.email);
console.log(usuario1.senha);