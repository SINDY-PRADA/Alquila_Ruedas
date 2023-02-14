const {Router} = require('express')
const router = Router()

const {createNewAlquiler} = require('../controllers/alquiler.controller')

router.post('/alqui/new-alqui', createNewAlquiler)

module.exports = router