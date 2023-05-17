const axios = require("axios")

class RecipeApiHandler {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: "https://api.spoonacular.com/recipes",
        })

        this.params = {
            apiKey: process.env.API_KEY_RECIPE
        }
    }


    getAllRecipes() {
        return this.axiosApp.get(`/complexSearch?number=150`, { params: this.params })
    }

    getOneRecipe(recipeId) {
        return this.axiosApp.get(`/${recipeId}/information`, { params: this.params })
    }

    searchByIngredient(ingredient) {
        return this.axiosApp.get(`/findByIngredients?ingredients=${ingredient}`, { params: this.params })
    }

}

const recipeApiHandler = new RecipeApiHandler()

module.exports = recipeApiHandler

