const { Users } = require('../models')
const { Op } = require('sequelize');
const { getAllData } = require('../middlewares/getAllData')

exports.addUser = async (req, res) => {
    try {
        const email = req.body.email
        const userCheck = await Users.findOne({ where: { email: email } })
        if (userCheck) {
            return res.json({ message: 'User already exits !!!' })
        }
        const addUser = await Users.create(req.body)
        if (!addUser) {
            return res.json({ message: error.message })
        }
        return res.json({ message: 'User added successfully !!!' })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const checkUser = await Users.findOne({ where: { id: req.params.id } })
        if (!checkUser) {
            return res.json({ message: "User does not exist !!" })
        }
        const isEmailExits = await Users.findOne({ where: { email: req.body.email, id: { [Op.ne]: req.params.id } }, })
        if (isEmailExits) {
            return res.json({ message: "Another user already using the same email !!" })
        }
        const updatedUser = await Users.update(req.body, { where: { id: req.params.id }, individualHooks: true, })
        if (updatedUser) {
            return res.json({ message: "User updated successfully !!" })
        }
        return res.json({ message: "Somthing went wrong !!" })
    } catch (error) {
        return res.json({ message: error.message })
    }
}

exports.getUsers = async (req, res) => {
    try {
        const UserData = await getAllData(req.body, Users)
        return res.json(UserData)
    } catch (error) {
        return res.json({ message: error.message })
    }
}