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
    res.send(empresas.find(empresa => empresa.id === Number(id)));
}

const findAllEmpresa = (req, res) => {
    res.send(empresas);
}

const createEmpresa = (req, res) => {
    if(req.body.nome == null) {
        return res.send ({menssage:"corpo da mensagem esta vazio"})
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