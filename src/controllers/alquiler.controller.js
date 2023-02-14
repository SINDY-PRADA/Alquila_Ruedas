const alquiCrtl = {};

const Alqui = require('../models/Alquiler')

alquiCrtl.createNewAlquiler = async (req, res) => {
    const {fechaSolicitud, fechaInicioAlquiler, fechaFinAlquiler, diasAlquiler} = req.body;
    const newAqlui = new Alqui({fechaSolicitud, fechaInicioAlquiler ,fechaFinAlquiler, diasAlquiler})
    await newAqlui.save();
    req.flash('succes_msg', 'Alquiler agregado correctamente ')
    res.redirect('/bicis')
}

module.exports = alquiCrtl