const biciCrlt = {};

const Bici = require('../models/Bicicleta')

biciCrlt.renderBiciForm = (req, res) => {
    res.render('bici/new-bici')
}

biciCrlt.createNewBici = async (req, res) => {
    const {marca, tipoBici, descripcion, serialBici, color, estado} = req.body;
    const newBici = new Bici({marca, tipoBici ,descripcion, serialBici,color, estado})
    await newBici.save();
    req.flash('succes_msg', 'Bici agregada correctamente ')
    res.redirect('/bicis')
}

biciCrlt.renderBicis = async (req, res) => {
    const bici = await Bici.find().lean()
    res.render('bici/all-bicis', {bici})
}

biciCrlt.EditBici = async (req, res) => {
    const bici = await Bici.findById(req.params.id).lean()
    res.render('bici/edit-bici', {bici})
}
biciCrlt.UpdateBici = async (req, res) => {
    const {marca, tipoBici, descripcion, serialBici, color, estado} = req.body
    await Bici.findByIdAndUpdate(req.params.id, {marca, tipoBici, descripcion, serialBici, color, estado})
    req.flash('succes_msg', 'Bici editada correctamente ')
    res.redirect('/bicis')
}
biciCrlt.renderDeleteBici =  async(req, res) => {
    await Bici.findByIdAndDelete(req.params.id)
    req.flash('succes_msg', 'Bici eliminada correctamente ')
    res.redirect('/bicis')
}

module.exports = biciCrlt