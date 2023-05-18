const router = require("express").Router();
const recipeApiHandler = require('../services/recipes-api.service');


router.get('/recipes', (req, res, next) => {

    const { ingredients } = req.query

    const promise = ingredients ? recipeApiHandler.searchByIngredient(ingredients) : recipeApiHandler.getAllRecipes()

    promise
        .then(({ data }) => {
            res.render('recipes/recipes-list', { recipes: data.results ? data.results : data })
        })
        .catch(err => next(err))
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



