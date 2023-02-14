const indexCtrl = {};

indexCtrl.renderIndex = (req, res) =>{
    res.render('index')
}

indexCtrl.renderNosotros = (req, res) =>{
    res.render('nosotros')
}

indexCtrl.renderCategorias = (req, res) =>{
    res.render('categorias')
}

indexCtrl.renderBlog = (req, res) =>{
    res.render('blog')
}
indexCtrl.renderAlquiler = (req, res) =>{
    res.render('alquiler')
}
indexCtrl.renderContacto = (req, res) =>{
    res.render('contacto')
}
module.exports = indexCtrl;