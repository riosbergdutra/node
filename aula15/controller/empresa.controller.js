const Empresa = require("../model/empresa")

const find = (req, res) => {
    const id = req.params.id;
    return  res.status(200).send(Empresa.find())
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

const updateEmpresa = (req, res) => {
    const empresa = req.body;
    const id = req.params.id;
    let found = false; 

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
    empresas.map(function(valor, index){
        if(valor.id == id){
            found = true;
            empresas[index] = empresa;
            return res.send(empresas[index]);
        }
    });
    if(!found){
      res.status(404).send({message: "não foi encontrado"}) 
    }
}

const deleteEmpresa = (req, res) => {
    const id = req.params.id;
    let found = false; 
    empresas.map(function(valor, index){
        if(valor.id == id){
            found = true
            empresas.splice(index,1)
            return res.send(valor)
        }
    });
    if(!found){
      res.status(404).send({message: "não foi encontrado"}) 
    }
}


module.exports = {
    find,
    findAllEmpresa,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
};