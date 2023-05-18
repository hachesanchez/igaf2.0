const express = require('express')
const { isLoggedIn, isLoggedOut, checkRoles, checkOwner } = require('../middlewares/route-ward')
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()



router.get("/", (req, res, next) => {

    User
        .find({ role: "CHEF" })
        .then(chefs =>
            res.render("chefs/chefs-list", { chefs })
        )
        .catch(error => next(error))
});


router.get("/:id", (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .populate('recipes')
        .then(chefs => res.render("chefs/chefs-details", { chefs }))
        .catch((err) => next(err));
});


module.exports = router;