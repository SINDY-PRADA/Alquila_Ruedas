const { Router } = require('express')
const router = Router ()

const { renderBiciForm, 
    createNewBici, 
    renderBicis, 
    EditBici,
    UpdateBici, 
    renderDeleteBici} = require('../controllers/bicicletas.controller')

// Nueva bici
router.get('/bici/add', renderBiciForm)

router.post('/bici/new-bici', createNewBici)

//listar bicis
router.get('/bicis', renderBicis)

//edit bici
router.get('/bici/edit/:id', EditBici)
router.put('/bici/edit/:id', UpdateBici)

//delete bici
router.delete('/bici/delete/:id', renderDeleteBici)

module.exports = router