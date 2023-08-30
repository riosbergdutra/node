function Carro(modelo, ano, marca, combustivel){
    this.modelo = modelo
    this.ano = ano
    this.marca = marca
    this.combustivel = combustivel
}
let carro = []
 carro[0] = new Carro("fusca",1976, "volkswagem", "gasolina");

carro[1] = new Carro("uno",2010,"fiat", "flex")
console.log(carro)