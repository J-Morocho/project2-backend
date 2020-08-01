const router = require('express').Router()
const {getAllUsers, getUserByName, createUser} = require('../controllers/user-controllers')

// get all users
router.get('/getAll', getAllUsers)

// get user by name
router.get('/name/:name', getUserByName)

// create user
router.post('/create', createUser)
module.exports = router