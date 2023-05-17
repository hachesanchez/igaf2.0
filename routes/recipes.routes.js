const router = require("express").Router();
const recipeApiHandler = require('../services/recipes-api.service');


router.get('/', (req, res, next) => {

    const { ingredients } = req.query

    const promise = ingredients ? recipeApiHandler.searchByIngredient(ingredients) : recipeApiHandler.getAllRecipes()

    promise
        .then(({ data }) => {
            res.render('recipes/recipes-list', { recipes: data.results ? data.results : data })
        })
        .catch(err => next(err))
})


router.get('/search', (req, res, next) => {
    res.render('recipes/recipes-search')
})


router.get('/tests', (req, res, next) => {
    res.render('tests-h')
})


router.get('/:id', (req, res, next) => {

    const { id } = req.params

    recipeApiHandler
        .getOneRecipe(id)
        .then(response => {
            res.render('recipes/recipes-details', { recipe: response.data })
        })
        .catch(err => next(err))
})


module.exports = router;



