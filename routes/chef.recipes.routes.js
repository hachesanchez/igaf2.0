const express = require('express')
const { isLoggedIn, isLoggedOut, checkRoles, checkOwner } = require('../middlewares/route-ward')
//const User = require('../models/User.model')
const Recipe = require('../models/Recipe.model')
const router = express.Router()
const uploaderMiddleware = require('../middlewares/uploader.middleware')


router.get("/create", isLoggedIn, checkRoles('CHEF'), (req, res, next) => {
    res.render('recipes/recipes-create')
})

router.post("/create", isLoggedIn, checkRoles('CHEF'), uploaderMiddleware.single('image'), (req, res, next) => {


    const { title, cookingTime, servings, instructions, amount, name, diets } = req.body
    const { path: image } = req.file
    const ingredients = []
    for (let i = 0; i < amount.length; i++) {
        let singleIgt = {
            amount: amount[i],
            name: name[i]
        }
        ingredients.push(singleIgt)
    }



    Recipe
        .create({ title, cookingTime, servings, image, instructions, ingredients, diets })
        //.then(response => res.redirect(`/recipes/${response.data.id}`))
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

///parte a partir de aqui 

router.get("/chefs-recipes", isLoggedIn, (req, res, next) => {


    Recipe
        .find()
        .then(chefcipes => {
            res.render('recipes/chef-recipes-list', { chefcipes })
        })
        .catch(err => console.log(err))

})


router.get('/chefs-recipes/:id', isLoggedIn, (req, res, next) => {
    const { id } = req.params
    // const userRole = {
    //     isUser: req.session.currentUser?.role === 'USER',
    //     isChef: req.session.currentUser?.role === 'CHEF'
    // }
    Recipe
        .findById(id)
        .then(chefcipes => res.render('recipes/chef-recipes-details', { chefcipes }))
        .catch(err => console.log(err))
})

module.exports = router;





// EDIT RECIPE
// if(req.file){

//     const { path: image } = req.file
//     const { title, cookingTime, servings, instructions, amount, name, diets } = req.body

//     User
//         .findByIdAndUpdate(id, title, cookingTime, servings, instructions,image, amount, name, diets)
//     .then(blablabla)
//     .catch(blablalba)
// }else{
//     User
//         .findByIdAndUpdate(id, title, cookingTime, servings, instructions, amount, name, diets)
//         .then(blablabla)
//         .catch(blablalba)
// }
