const router = require("express").Router()
const { findById } = require("../models/User.model")
const User = require('../models/User.model')
const { isLoggedIn, checkRoles } = require('../middlewares/route-ward')
// user list for ADMIN
router.get("/users", checkRoles('ADMIN'), (req, res, next) => {
    User
        .find()
        .then(user => res.render("user/list", { user }))
        .catch()
})
// user profile
router.get("/profile", (req, res, next) => {
    res.render("user/profile", { user: req.session.currentUser })
})
module.exports = router
