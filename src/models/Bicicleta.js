const { Schema, model } = require("mongoose");

const BicicletaSchema = new Schema({
    marca:{type:String, required: true, },
    tipoBici:{type: String, required:true},
    descripcion:{type:String, required:true},
    serialBici:{type:String, required:true},
    color:{type:String, required:true},
    estado:{type:String, required:true},
}, {
    timestamps: true,
    versionKey: false,
})

module.exports = model('Bicicletas', BicicletaSchema);