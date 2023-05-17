const express = require('express')
const { isLoggedIn, isLoggedOut, checkRoles, checkOwner } = require('../middlewares/route-ward')
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()



router.get("/chefs", (req, res, next) => {

    User
        .find({ role: "CHEF" })
        .then(chefs =>
            //res.send({ chefs })
            res.render("chefs/chefs-list", { chefs })
        )
        .catch((err) => console.log(err));
});


router.get("/chefs/:id", (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(chefs => res.render("chefs/chefs-details", { chefs }))
        .catch((err) => console.log(err));
});







module.exports = router;