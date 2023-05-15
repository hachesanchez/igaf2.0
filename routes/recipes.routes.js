const router = require("express").Router();
const axios = require("axios");

const recipeApiHandler = require('../services/recipes-api.service');
//const { response } = require("../app");


router.get('/recipes', (req, res, next) => {
    // res.send("HOAISDOAKSODAOSDKOASKD")
    recipeApiHandler
        .getAllRecipes()
        .then(response => {
            //      console.log(response.data.results)
            res.render('recipes/recipes-list', { recipes: response.data.results })
        })
        .catch(err => next(err))
})


module.exports = router;

