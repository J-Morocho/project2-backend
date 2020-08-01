const router = require('express').Router()
const {getAllEvents, getEventsByBorough, getEventTypes, getEventById} = require('../controllers/data-controllers')

// backend connection test
router.get('/', (req,res) => {
    res.send('Backend has been reached!')
})

// get all events in database
router.get('/getAll', getAllEvents)
// get event by borough
router.get('/:borough', getEventsByBorough)
// get event types ** May or may not need it (NOT WORKING)
router.get('/getEventTypes', getEventTypes)
// get event by Id
router.get('/id/:id', getEventById)
// remove datum
router.delete('/', )

module.exports = router