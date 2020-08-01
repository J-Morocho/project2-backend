const router = require('express').Router()
const {test} = require('../controllers/user-controllers')

router.get('/' , test)


module.exports = router