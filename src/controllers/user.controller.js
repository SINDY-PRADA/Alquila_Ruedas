const usersCtrl = {}


const User = require ('../models/User')

usersCtrl.renderSignUpForm =  (req, res) =>{
    res.render('user/login')
}

usersCtrl.signUp = async (req, res) => {

    const {nombre,tipoDoc,numeroDoc,numeroMovil,direccion,username,password} = req.body
    const newUser = new User({nombre,tipoDoc,numeroDoc,numeroMovil,direccion,username,password})
    await newUser.save()
    res.redirect('/user/signin')
    req.flash('succes_msg', 'Usuario agregada correctamente ')
}


usersCtrl.renderSignInForm =  (req, res) =>{
    res.render('user/login')
}

usersCtrl.signIn = (req, res) => {
    const {username, password} = req.body;

    User.findOne({username}, (err,user) =>{
        if(err){
            res.status(500).send('Error al autentificar el usuario')
        }else if(!user){
            res.status(500).send('El usuario no existe')
        }else{
            user.isCorrectPassword(password,(err, result)=>{
                if(err){
                    res.status(500).send('Error al autentificar el usuario 2')
                }else if(result){
                    res.redirect('/bicis')
                }else{
                    res.status(500).send('Usuario Y/O contraseña incorrecta')
                }
            });
        }
    });
}

usersCtrl.logout = (req, res) => {
    res.send('logout')
}
module.exports = usersCtrl;