const router = require("express").Router();
const axios = require("axios");

const recipeApiHandler = require('../services/recipes-api.service');
//const { response } = require("../app");


router.get('/recipes', (req, res, next) => {
    // res.send("HOAISDOAKSODAOSDKOASKD")
    recipeApiHandler
        .getAllRecipes()
        .then(response => res.render('recipes/recipes-list', { recipes: response.data }))
        .catch(err => next(err))
})


module.exports = router;

