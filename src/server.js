const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path')
const morgan = require('morgan')
const methodOverride = require ('method-override')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
// Inicializacione s
const app = express();


//configuraciones 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join( __dirname, 'views'))
app.engine('.ejs', 
    engine({ 
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.ejs',
    })
);

app.set('view engine', '.ejs');
//Middlewars 
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
//global variables
app.use((req,res, next) =>{
    res.locals.succes_msg = req.flash('succes_msg')
    next()
})

//rutas
app.use(require('./routes/index.routes'))
app.use(require('./routes/bicicleta.routes'))
app.use(require('./routes/users.routes'))
//static files 
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app