const express = require('express')
const { isLoggedIn, isLoggedOut, checkRoles, checkOwner } = require('../middlewares/route-ward')
//const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()


router.get("/create", isLoggedIn, checkRoles('CHEF'), (req, res, next) => {

    res.render('recipes/recipes-create')
})

router.post("/create", isLoggedIn, checkRoles('CHEF'), (req, res, next) => {

    const { title, cookingTime, servings, image, instructions, amount, name } = req.body
    const ingredients = []
    for (let i = 0; i < amount.length; i++) {
        let singleIgt = {
            amount: amount[i],
            name: name[i]
        }
        ingredients.push(singleIgt)
    }

    // res.send({ title, image, instructions, ingredients })

    Recipe
        .create({ title, cookingTime, servings, image, instructions, ingredients })
        //.then(response => res.redirect(`/recipes/${response.data.id}`))
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

///parte a partir de aqui 

router.get("/chefs-recipes", (req, res, next) => {


    Recipe
        .find()
        .then(chefcipes => {
            res.render('recipes/chef-recipes-list', { chefcipes })
        })
        .catch(err => console.log(err))

})


router.get('/chefs-recipes/:id', isLoggedIn, (req, res, next) => {
    const { id } = req.params
    const userRole = {
        isPM: req.session.currentUser?.role === 'PM'
    }
    User
        .findById(id)
        .then(users => res.render('students/students-details', { users, userRole }))
        .catch(err => console.log(err))
})

module.exports = router;



