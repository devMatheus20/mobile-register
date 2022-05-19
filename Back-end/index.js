const express = require('express')
const { request } = require('http')
const uuid = require('uuid')
const cors = require('cors')


const app = express()
const port = 3001

app.use(express.json())
app.use(cors())


const users = []


const checkUserId = (req, res, next) => {

    const { id } = req.params

    const index = users.findIndex(user => user.id === id)

    if(index < 0) return res.status(404).json({message: "Usuário não encontrado"})

    req.UserId = id
    req.UserIndex = index

    next()

}


app.post("/users", (req, res) => {
    const { name, age } = req.body

    const newUser = { id: uuid.v4(), name, age }

    users.push(newUser)

    return res.status(201).json(newUser)
})


app.get("/users", (req, res) => {
    return res.json(users)
})


app.delete("/users/:id", checkUserId, (req, res) => {

    users.splice(req.UserIndex, 1)

    return res.json({message:"Usuário Removido"})

})


app.listen(port)