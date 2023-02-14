const { Schema, model } = require("mongoose");

const AlquilerSchema = new Schema({
    fechaSolicitud:{type:String, required: true, },
    fechaInicioAlquiler:{type: String, required:true},
    fechaFinAlquiler:{type:String, required:true},
    diasAlquiler:{type:String, required:true},

}, {
    timestamps: true,
    versionKey: false,
})

module.exports = model('Alquilers', AlquilerSchema);