const express = require('express')
const { isLoggedIn, isLoggedOut, checkRoles, checkOwner } = require('../middlewares/route-ward')
//const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()


router.get("/recipes/create", isLoggedIn, checkRoles('CHEF'), (req, res, next) => {

    res.render('recipes/recipes-create')
})

router.post("/recipes/create", isLoggedIn, checkRoles('CHEF'), (req, res, next) => {
    console.log(req.body)

    const { title, image, instructions, ingredients } = req.body

    Recipe
        .create({ title, image, instructions, ingredients })
        //.then(response => res.redirect(`/recipes/${response.data.id}`))
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

module.exports = router;



