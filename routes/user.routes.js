const router = require("express").Router()
const { findById } = require("../models/User.model")
const { populate } = require("../models/Recipe.model")
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const { isLoggedIn, checkRoles } = require('../middlewares/route-ward')


// user list for ADMIN
router.get("/users", checkRoles('ADMIN'), (req, res, next) => {
    
    User
        .find()
        .then(user => res.render("user/list", { user }))
        .catch(err => console.log(err))
})


// USER PROFILE
router.get("/profile", (req, res, next) => {
    const userId = req.session.currentUser._id
    User
        .findById(userId)
        .populate('recipes')
        .then(user => { res.send(user) })
        .catch(err => console.log(err))
})


// USER PROFILE LIST
router.get("/profiles/:id", isLoggedIn, (req, res, next) => {
    const { id } = req.params
    User
        .findById(id)
        .then((user) => res.render("user/profileslist", { user }))
        .catch(err => console.log(err))
})


// EDIT USER PROFILES
router.get("/editprofiles/:id", (req, res, next) => {
    const { id } = req.params
    User
        .findById(id)
        .then((user) => res.render("user/editprofile", { user }))
        .catch(err => console.log(err))
})

router.post("/editprofiles/:id", (req, res, next) => {
    const { userName, email, profileImage, description } = req.body
    const { id } = req.params
    User
        .findByIdAndUpdate(id, { userName, email, profileImage, description })
        .then(() => res.redirect("/profile"))
        .catch(err => console.log(err))
})


// DELETE USER PROFILE
router.post("/deleteprofile/:id", (req, res, next) => {
    const { id } = req.params
    User
        .findByIdAndDelete(id)
        .then(() => res.redirect("/users"))
        .catch(err => console.log(err))
})


module.exports = router