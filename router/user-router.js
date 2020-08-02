const router = require('express').Router()
const {getAllUsers, getUserByName, createUser, getUserEventList, addEventToUserList, removeEventFromUserList} = require('../controllers/user-controllers')

// get all users
router.get('/getAll', getAllUsers)

// get user by name
router.get('/name/:name', getUserByName)

// get user event list
router.get('/user/:name/eventsAttending', getUserEventList)

// create user
router.post('/create', createUser)

// add event to user's eventsAttending array
router.put('/user/:name/addEvent/:eventObjectId', addEventToUserList)

// remove event from user's eventsAttending array
router.delete('/user/:name/removeEvent/:eventObjectId', removeEventFromUserList)


module.exports = router