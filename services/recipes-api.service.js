
const axios = require("axios")

class RecipeApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: "https://api.spoonacular.com"
            //process.env.API_KEY_RECIPE. tenemos que meterla en variable: 37558f3c606a4c508470ebc59d241448&
        })
    }


    getAllRecipes() {
        return this.axiosApp.get(`/recipes/complexSearch?apiKey=${process.env.API_KEY_RECIPE}`)
    }

    getOneRecipe(recipeId) {
        return this.axiosApp.get(`/recipes/${recipeId}/information?apiKey=${process.env.API_KEY_RECIPE}`)
    }



}


const recipeApiHandler = new RecipeApiHandler()

module.exports = recipeApiHandler





/* 
 
// SAVE UPDATE
saveCharacter(characterInfo) {
    return this.axiosApp.post(`/characters`, characterInfo)
}

// UPDATE
editCharacter(characterId, characterInfo) {
    return this.axiosApp.put(`/characters/${characterId}`, characterInfo)
} */