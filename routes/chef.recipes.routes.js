const express = require('express')
const { isLoggedIn, isLoggedOut, checkRoles, checkOwner } = require('../middlewares/route-ward')
//const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()


router.get("/recipes/create", isLoggedIn, checkRoles('CHEF'), (req, res, next) => {

    res.render('recipes/recipes-create')
})

router.post("/recipes/create", isLoggedIn, checkRoles('CHEF'), (req, res, next) => {

    const { title, image, instructions, amount, name } = req.body
    const ingredients = [{ amount }, { name }]
    // res.send({ title, image, instructions, ingredients })

    Recipe
        .create({ title, image, instructions, ingredients })
        //.then(response => res.redirect(`/recipes/${response.data.id}`))
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

module.exports = router;



