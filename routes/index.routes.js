const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});





// ESTAS RUTAS DEBERÍAN IR EN RECIPES.ROUTES.JS

/* router.get('/recipes/search', (req, res, next) => {
  // res.send("HELO");
  res.render('recipes/recipes-search')
}); */

module.exports = router;
