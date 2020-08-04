const router = require('express').Router()
const {getAllEvents, getEventsByBorough, 
    getEventTypes, getEventById,
    getDistinctField, getEventByBoroughAndLocation} = require('../controllers/event-controllers')

// backend connection test
router.get('/', (req,res) => {
    res.send('Backend has been reached!')
})

// get all events in database
router.get('/getAll', getAllEvents)

// get event by borough
router.get('/borough/:borough', getEventsByBorough)

// get event types ** May or may not need it 
router.get('/getEventTypes', getEventTypes)

// get event by Id
router.get('/id/:id', getEventById)

// get the distinct values from an event's field 
router.get('/distinct/:field', getDistinctField)

router.get('/query/:q1/:q2', getEventByBoroughAndLocation)


module.exports = router