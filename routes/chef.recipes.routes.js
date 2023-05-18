const express = require('express')
const { isLoggedIn, checkRoles } = require('../middlewares/route-ward')
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()
const uploaderMiddleware = require('../middlewares/uploader.middleware')


router.get("/create", isLoggedIn, checkRoles('CHEF', 'ADMIN'), (req, res, next) => {
    res.render('recipes/recipes-create')
})

router.post("/create", isLoggedIn, checkRoles('CHEF', 'ADMIN'), uploaderMiddleware.single('image'), (req, res, next) => {

    const { title, cookingTime, servings, instructions, amount, name, diets } = req.body
    const { path: image } = req.file
    const userId = req.session.currentUser._id
    const ingredients = []

    for (let i = 0; i < amount.length; i++) {
        let singleIgt = {
            amount: amount[i],
            name: name[i]
        }
        ingredients.push(singleIgt)
    }

    Recipe
        .create({ title, cookingTime, servings, image, instructions, ingredients, diets })
        .then(recipe => User.findByIdAndUpdate(userId, { $push: { recipes: recipe._id } }))
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})


router.get("/chefs-recipes", isLoggedIn, (req, res, next) => {

    Recipe
        .find()
        .then(chefcipes => {
            res.render('recipes/chef-recipes-list', { chefcipes })
        })
        .catch(err => next(err))

})


router.get('/chefs-recipes/:id', isLoggedIn, (req, res, next) => {

    const { id } = req.params

    Recipe
        .findById(id)
        .then(chefcipes => res.render('recipes/chef-recipes-details', { chefcipes }))
        .catch(err => next(err))
})

router.get('/edit-chef-recipes/:id', isLoggedIn, (req, res, next) => {


    const { id } = req.params

    Recipe
        .findById(id)
        .then((chefcipes) => res.render("recipes/edit-chef-recipes", { chefcipes }))
        .catch(err => next(err))
})

router.post('/edit-chef-recipes/:id', isLoggedIn, uploaderMiddleware.single('image'), (req, res, next) => {

    const { id } = req.params
    const { title, cookingTime, servings, instructions, amount, name, diets } = req.body
    const { path: image } = req.file
    const ingredients = []

    for (let i = 0; i < amount.length; i++) {
        let singleIgt = {
            amount: amount[i],
            name: name[i]
        }
        ingredients.push(singleIgt)
    }

    Recipe
        .findByIdAndUpdate(id, { title, cookingTime, servings, image, instructions, ingredients, diets })
        .then(() => res.redirect("/chefs-recipes"))
        .catch(error => next(error))
})

router.post('/delete-chef-recipes/:id', (req, res, next) => {

    const { id } = req.params

    console.log(id)
    console.log('holaaaa')
    Recipe
        .findByIdAndDelete(id)
        .then(() => res.redirect("/chefs-recipes"))
        .catch(error => next(error))
})



module.exports = router;
