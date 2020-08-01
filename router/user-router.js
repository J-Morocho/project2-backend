const router = require('express').Router()
const {getAllUsers, getUserByName, createUser, addEventToUserList} = require('../controllers/user-controllers')

// get all users
router.get('/getAll', getAllUsers)

// get user by name
router.get('/name/:name', getUserByName)

// create user
router.post('/create', createUser)

// add event to user's eventsAttending array
router.put('/user/:name/addEvent/:eventObjectId', addEventToUserList)


module.exports = router