const empresas = [
    {
        id: 1,
        nome: "empresa 1",
        numFuncionarios: 100
    },
    {
        id: 2,
        nome: "empresa 2",
        numFuncionarios: 1200
    },
    {
        id: 3,
        nome: "empresa 3",
        numFuncionarios: 5000
    },
];

const find = (req, res) => {
    const id = req.params.id;
    let found = false;
    empresas.map(function(valor){
        if(valor.id == id){
            found = true
            return res.send(valor)
        }
    });
    if(!found){
      res.status(404).send({message: "não foi encontrado"}) 
    }
}

const findAllEmpresa = (req, res) => {
    res.send(empresas);
}

const createEmpresa = (req, res) => {
    const empresa = req.body;
    if (req.body.nome == null) {
        return res.send({ message: "corpo da mensagem está vazio" }); 
    }
    const novaEmpresa = req.body;
    empresas.push(novaEmpresa);
    res.send(empresas);
}

module.exports = {
    find,
    findAllEmpresa,
    createEmpresa
};