const express = require('express')
const { isLoggedIn, isLoggedOut, checkRoles, checkOwner } = require('../middlewares/route-ward')
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()


router.get("/chefs", isLoggedIn, (req, res, next) => {
    res.render('chefs/chefs-list')
})

//DECIRLE QUE SÓLO APAREZCAN EN LA VIEW LOS QUE COINCIDAN CON EL ROLE: CHEF
router.get("/chefs", isLoggedIn, (req, res, next) => {
    User
        .find()
        .then(user => res.render("chefs/chefs-list", { user }))
        .catch(err => console.log(err))
})


module.exports = router;