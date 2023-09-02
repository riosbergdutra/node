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
    
    if(Object.keys(empresa).length === 0){
        return res.status(400).send({message: "o corpo da mensagem está vazio"})
    }

    if(!empresa.id){
        return res.status(400).send({message: "O campo 'id' não foi encontrado"})
    }
    if(!empresa.nome){
        return res.status(400).send({message: "O campo 'nome' não foi encontrado"})
    }
    if(!empresa.numFuncionarios){
        return res.status(400).send({message: "O campo 'numFuncionarios' não foi encontrado"})
    }

    const novaEmpresa = req.body;
    novaEmpresa.nacionalidade = "brasileira"
    empresas.push(novaEmpresa);
    res.status(201).send(empresas);
    

}


module.exports = {
    find,
    findAllEmpresa,
    createEmpresa
};