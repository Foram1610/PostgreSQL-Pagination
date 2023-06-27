const express = require('express')
const route = express.Router()

route.use('/user', require('./users'))
route.use('/userrole',require('./userrole'))

module.exports = route