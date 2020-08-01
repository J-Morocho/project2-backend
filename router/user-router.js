const router = require('express').Router()
const {getAllUsers} = require('../controllers/user-controllers')

// get all users
router.get('/getAll', getAllUsers)

module.exports = router