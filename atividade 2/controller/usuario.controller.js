const usuarios = [
    {
        id: 1,
        nome: "marcos",
        email: "marcos@email.com",
        senha: "marcossenha"
    },
    {
        id: 2,
        nome: "vinicius",
        email: "vinicius@email.com",
        senha: "viniciussenha"
    },
    {
        id: 3,
        nome: "samuel",
        email: "samuel@email.com",
        senha:"samuelsenha"
    },
    ]
    
    const find = (req, res) => {
        const id = req.params.id;
        let found = false; 
        usuarios.map(function(valor){
            if(valor.id == id){
                found = true
                return res.send(valor)
            }
        });
        if(!found){
          res.status(404).send({message: "Usuário não encontrado"}) 
        }
    }
    
    const findAllUsuario = (req, res) => {
        res.send(usuarios);
    }
    
    const createUsuario = (req, res) => {
        const usuario = req.body;
        
        if(Object.keys(usuario).length === 0){
            return res.status(400).send({message: "O corpo da mensagem está vazio"})
        }
    
        if(!usuario.id){
            return res.status(400).send({message: "O campo 'id' não foi encontrado"})
        }
        if(!usuario.nome){
            return res.status(400).send({message: "O campo 'nome' não foi encontrado"})
        }
        if(!usuario.email){
            return res.status(400).send({message: "O campo 'email' não foi encontrado"})
        }
        usuarios.push(usuario);
        res.status(201).send(usuarios);
    }
    
    const updateUsuario = (req, res) => {
        const usuario = req.body;
        const id = req.params.id;
        let found = false; 
    
        if(Object.keys(usuario).length === 0){
            return res.status(400).send({message: "O corpo da mensagem está vazio"})
        }
    
        if(!usuario.id){
            return res.status(400).send({message: "O campo 'id' não foi encontrado"})
        }
        if(!usuario.nome){
            return res.status(400).send({message: "O campo 'nome' não foi encontrado"})
        }
        if(!usuario.email){
            return res.status(400).send({message: "O campo 'email' não foi encontrado"})
        }
        if(!usuario.senha){
            return res.status(400).send({message: "O campo 'senha' não foi encontrado"})
        }
        usuarios.map(function(valor, index){
            if(valor.id == id){
                found = true;
                usuarios[index] = usuario;
                return res.send(usuarios[index]);
            }
        });
        if(!found){
          res.status(404).send({message: "Usuário não encontrado"}) 
        }
    }
    
    const deleteUsuario = (req, res) => {
        const id = req.params.id;
        let found = false; 
        usuarios.map(function(valor, index){
            if(valor.id == id){
                found = true
                usuarios.splice(index,1)
                return res.send(valor)
            }
        });
        if(!found){
          res.status(404).send({message: "Usuário não encontrado"}) 
        }
    }
    
    module.exports = {
        find,
        findAllUsuario, 
        createUsuario,
        updateUsuario,
        deleteUsuario
    };