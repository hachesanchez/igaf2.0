const router = require("express").Router();
const axios = require("axios");
const recipeApiHandler = require('../services/recipes-api.service');
const { response } = require("express");



router.get('/recipes', (req, res, next) => {

    const { ingredients } = req.query;

    if (ingredients) {
        recipeApiHandler
            .searchByIngredient(ingredients)
            .then(response => {
                res.render('recipes/recipes-list', { recipes: response.data })
            })
            .catch(err => next(err))
    } else {
        recipeApiHandler
            .getAllRecipes()
            .then(response => {
                res.render('recipes/recipes-list', { recipes: response.data.results })
            })
            .catch(err => next(err))
    }
})


router.get('/recipes/search', (req, res, next) => {
    res.render('recipes/recipes-search')
})

router.get('/tests', (req, res, next) => {
    res.render('tests-h')
})


router.get('/recipes/:id', (req, res, next) => {

    const { id } = req.params

    recipeApiHandler
        .getOneRecipe(id)
        .then(response => {
            console.log(response.data.results)
            res.render('recipes/recipes-details', { recipe: response.data })
        })
        .catch(err => next(err))
})



module.exports = router;



