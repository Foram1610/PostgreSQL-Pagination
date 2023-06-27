const express = require('express')
const route = express.Router()
const users = require('../controllers/users.controller')

route.post('/',users.addUser)
route.put('/:id', users.updateUser)
route.post('/getUsers',users.getUsers)

module.exports = route