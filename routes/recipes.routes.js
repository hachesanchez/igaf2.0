const router = require("express").Router();
const recipeApiHandler = require('../services/recipes-api.service');
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model');



router.get('/recipes', (req, res, next) => {

    const { ingredients } = req.query

    const APIpromise = ingredients ? recipeApiHandler.searchByIngredient(ingredients) : recipeApiHandler.getAllRecipes()
    const DBpromise = ingredients ? Recipe.find({ 'ingredients.name': ingredients }) : Recipe.find()
    const promises = [APIpromise, DBpromise]

    Promise.all(promises).then(response => {

        const APIResponse = response[0].data.results ? response[0].data.results : response[0].data
        const DBResponse = response[1]

        res.render('recipes/recipes-list', { APIResponse, DBResponse })
        // const recipeList = [...APIResponse, ...DBResponse]
        // res.render('recipes/recipes-list', { recipes: recipeList })
    })
})


router.get('/recipes/search', (req, res, next) => {
    res.render('recipes/recipes-search')
})


router.get('/recipes/tests', (req, res, next) => {
    res.render('tests-h')
})


router.get('/recipes/:id', (req, res, next) => {

    const { id } = req.params

    recipeApiHandler
        .getOneRecipe(id)
        .then(response => {
            res.render('recipes/recipes-details', { recipe: response.data })
        })
        .catch(err => next(err))
})


module.exports = router;



