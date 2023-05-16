
const axios = require("axios")

class RecipeApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: "https://api.spoonacular.com"
            //process.env.API_KEY_RECIPE. tenemos que meterla en variable: 37558f3c606a4c508470ebc59d241448&
        })
    }


    getAllRecipes() {
        return this.axiosApp.get(`/recipes/complexSearch?number=50&apiKey=${process.env.API_KEY_RECIPE}`)
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


// {{baseUrl}}/recipes/findByIngredients?ingredients=carrots&numberapiKey=37558f3c606a4c508470ebc59d241448

/* 
searchByIngredient(ingredient) {
    return this.axiosApp.get(`/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${process.env.API_KEY_RECIPE}`);
}
 */