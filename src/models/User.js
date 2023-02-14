const bcrypt = require('bcrypt');
const { Schema, model } = require("mongoose");

const saltRounds = 10;

const UserSchema = new Schema({
    username:{type:String, required: true, unique:true},
    password:{type: String, required:true},
    nombre:{type:String, required:true},
    tipoDoc:{type:String, required:true},
    numeroDoc:{type:Number, required:true},
    numeroMovil:{type:String, required:true},
    direccion:{type:String, required:true}
}, {
    timestamps: true,
    versionKey: false,
})

UserSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document = this;

        bcrypt.hash(document.password, saltRounds,(err, hashedPassword)=>{
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});


UserSchema.methods.isCorrectPassword = function(password,callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err,same);
        }
    });
}

module.exports = model('User', UserSchema);