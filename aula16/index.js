const express = require("express")
const connectoDatabase = require("./database/database")
const authService = require("./service/auth.service")
const app = express()

connectoDatabase()

const port = 4500

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Hello World")
    console.log(generateToken())
})

app.post("/login", async (req,res) => {
   try{ const {email,senha} = req.body
    const user = await authService.loginService(email)

    if(!user){
        return res.status(400).send({message:"Usuario não encontrado, tente novamente"})
    }

    if(senha != user.senha){
        return res.status(400).send({message:"senha invalida"})
    }
    user.generateToken = token()
    await authService.updateToken(user)
    res.send(user)
}catch(err){
    console.log(`${err}`)
}
} )

const generateToken = () => {let token = Math.random().toString(36).substring(2);return token;}

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})