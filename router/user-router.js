const router = require('express').Router()
const {getAllUsers, getUserByName} = require('../controllers/user-controllers')

// get all users
router.get('/getAll', getAllUsers)

// get user by name
router.get('/name/:name', getUserByName)

module.exports = router