const router = require("express").Router()
const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const { isLoggedIn, checkRoles } = require('../middlewares/route-ward')



router.get("/users", checkRoles('ADMIN'), (req, res, next) => {

    User
        .find()
        .then(user => res.render("user/list", { user }))
        .catch(error => next(error))
})


router.get("/profile", (req, res, next) => {

    const { _id: userId } = req.session.currentUser

    User
        .findById(userId)
        .populate('recipes')
        .then(user => {
            res.render('user/profile', user)
        })
        .catch(err => next(err))
})


router.get("/profiles/:id", isLoggedIn, (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then((user) => res.render("user/profileslist", { user }))
        .catch(error => next(error))
})


router.get("/editprofiles/:id", (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then((user) => res.render("user/editprofile", { user }))
        .catch(error => next(error))
})


router.post("/editprofiles/:id", (req, res, next) => {

    const { userName, email, profileImage, description } = req.body
    const { id } = req.params

    User
        .findByIdAndUpdate(id, { userName, email, profileImage, description })
        .then(() => res.redirect("/profile"))
        .catch(error => next(error))
})


router.post("/deleteprofile/:id", (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect("/users"))
        .catch(error => next(error))
})

router.get("/makefav/db/:id", (req, res, next) => {

    const { _id: userId } = req.session.currentUser
    const { id: chefcipe } = req.params

    User
        .findByIdAndUpdate(userId, { $push: { favRecipes: { recipesFromMongo: chefcipe } } })
        .then(() => res.redirect("/")) //redirect to the same page (/chef-recipes/;id)
        .catch(error => next(error))

})

router.get("/makefav/api/:id", (req, res, next) => {


    const { _id: userId } = req.session.currentUser
    const { id: recipe } = req.params


    User
        .findByIdAndUpdate(userId, { $push: { favRecipes: { recipesFromApi: recipe } } })
        .then(() => res.redirect("/")) //redirect to the same page (/recipes/;id)
        .catch(error => next(error))


})


module.exports = router