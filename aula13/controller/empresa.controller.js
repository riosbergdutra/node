const findAllEmpresa = (req,res) => {
    res.send("Todas as empresas listadas")
}

const createEmpresa = (req,res) => {
    res.send("empresa criada com sucesso")
}

module.exports = {
    findAllEmpresa,
    createEmpresa
}