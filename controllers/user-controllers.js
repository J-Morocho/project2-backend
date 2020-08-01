require('../db/connection')
const User = require('../models/user')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getUserByName = async(req, res) => {
    try {
        const user = await User.find({"name":req.params.name})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error)
        
    }
}
module.exports = {getAllUsers, getUserByName}