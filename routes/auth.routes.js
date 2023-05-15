const router = require("express").Router()
const bcrypt = require('bcryptjs')
const saltRounds = 10

const User = require('../models/User.model')



// MIDDLEWARES


// Sign up
router.get('/register', (req, res, next) => res.render('auth/signup'))
router.post('/register', (req, res, next) => {

    const { userName, email, userPwd, role, profileImage, description } = req.body

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(userPwd, salt))
        .then(hashedPassword => User.create({ email, userName, profileImage, role, description, password: hashedPassword }))
        .then(createdUser => res.redirect('/'))
        .catch(error => next(error))
})



// Login
router.get('/login', (req, res, next) => res.render('auth/login'))
router.post('/login', (req, res, next) => {

    const { email, userPwd } = req.body

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login', { errorMessage: 'Email not registerd on Data Base' })
                return
            } else if (bcrypt.compareSync(userPwd, user.password) === false) {
                res.render('auth/login', { errorMessage: 'Incorrect password' })
                return
            } else {
                req.session.currentUser = user
                res.redirect('/')
            }
        })
        .catch(error => next(error))
})



// Logout
router.post('/logout', (req, res, next) => {
    req.session.destroy(() => res.redirect('/login'))
})










module.exports = router