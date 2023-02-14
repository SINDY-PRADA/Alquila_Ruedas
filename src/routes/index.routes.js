const { Router} = require('express')
const router = Router();

const { renderIndex, renderNosotros, renderCategorias, renderBlog, renderAlquiler, renderContacto } = require('../controllers/index.controller')

router.get('/', renderIndex)

router.get('/Nosotros',renderNosotros)
router.get('/Categorias',renderCategorias)
router.get('/Blog',renderBlog)
router.get('/Alquiler/',renderAlquiler)
router.get('/Contacto',renderContacto)
module.exports = router;
