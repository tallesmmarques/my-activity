const express = require('express')
const userController = require('./controllers/userController')

const routes = express.Router()

routes.get('/', (req, res) => res.send("Hello Talles"))

routes.get('/user', userController.index)
routes.post('/user', userController.create)
routes.put('/user/:id', userController.update)
routes.delete('/user/:id', userController.delete)

module.exports = routes