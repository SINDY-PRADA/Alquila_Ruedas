const {Router} = require('express')
const router = Router()

const {renderSignInForm, renderSignUpForm, signIn, signUp, logout} = require('../controllers/user.controller')

router.get('/user/signup', renderSignUpForm)

router.post('/user/signup', signUp)

router.get('/user/signin', renderSignInForm)

router.post('/user/signin', signIn )

router.post('/user/logout', logout)
module.exports = router