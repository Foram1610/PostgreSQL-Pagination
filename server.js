const express = require('express')
const app = express()
require('dotenv').config()
require('./config/config.json')
const cors = require('cors');
const { sequelize } = require('./models')
const routes = require('./routes/index')
const morgan = require('morgan')

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api', routes)
const PORT = process.env.PORT || 8080
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}!!`)
    await sequelize.authenticate()
        .then(
            () => { console.log("Database connected!!")},
            error => { console.log("Database connection error", error) }
        )
        .catch(err => { console.log('database connection error', err), res.redirect('/error') });
})