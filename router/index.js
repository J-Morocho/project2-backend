const router = require('express').Router()
const {} = require('../controllers/data-controllers')


// get all data
router.get('/', (req,res) => {
    res.send('Backend has been reached!')
})
// get single datum
router.get('/', )
// create data
router.post('/', )
// update datum
router.put('/', )
// remove datum
router.delete('/', )

module.exports = router