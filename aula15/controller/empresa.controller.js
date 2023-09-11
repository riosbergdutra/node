const Empresa = require("../model/empresa")

const find = async (req, res) => {
    const id = req.params.id;
    try {
        const empresa = await Empresa.findById(id).exec();
        return res.status(200).send(empresa);
    } catch (error) {
        return res.status(500).send({ message: "Erro ao buscar empresa por ID" });
    }
}

const findAllEmpresa = async (req, res) => {
    try {
        const empresas = await Empresa.find().exec();
        return res.status(200).send(empresas);
    } catch (error) {
        return res.status(500).send({ message: "Erro ao buscar todas as empresas" });
    }
}

const createEmpresa = async (req, res) => {
    const empresa = req.body;

    if (Object.keys(empresa).length === 0) {
        return res.status(400).send({ message: "O corpo da mensagem está vazio" });
    }

    if (!empresa.nome || !empresa.numFuncionarios) {
        return res.status(400).send({ message: "Campos 'nome' e 'numFuncionarios' são obrigatórios" });
    }

    try {
        const novaEmpresa = await Empresa.create(empresa);
        return res.status(201).send(novaEmpresa);
    } catch (error) {
        return res.status(500).send({ message: "Erro ao criar a empresa" });
    }
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