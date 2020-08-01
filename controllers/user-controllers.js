require('../db/connection')
const User = require('../models/user')


const test = async (req, res) => {
    res.send("User route works!")
}

module.exports = {test}