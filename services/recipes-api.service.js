
const axios = require("axios")

class RecipeApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: "https://api.spoonacular.com"
        })
    }


    getAllRecipes() {
        return this.axiosApp.get(`/recipes/complexSearch?number=150&apiKey=${process.env.API_KEY_RECIPE}`)
    }

    getOneRecipe(recipeId) {
        return this.axiosApp.get(`/recipes/${recipeId}/information?apiKey=${process.env.API_KEY_RECIPE}`)
    }

    searchByIngredient(ingredient) {
        return this.axiosApp.get(`/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${process.env.API_KEY_RECIPE}`)
    }

}


const recipeApiHandler = new RecipeApiHandler()

module.exports = recipeApiHandler

