const { UserRole } = require('../models')

const includeFields = [
    {
        "field": "userRole",
        "model": UserRole,
        "as" : ""
    }
]

module.exports = { includeFields }