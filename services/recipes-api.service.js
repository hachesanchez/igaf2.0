
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

    /*  getOneRecipe() {
         return this.axiosApp.get(`/recipes/${recipeId}`)
     }
  */


}


const recipeApiHandler = new RecipeApiHandler()

module.exports = recipeApiHandler

/* getAllRecipes() {
    return this.axiosApp.get(`/recipes/complexSearch&number=50?apiKey=${process.env.API_KEY_RECIPE}`)
} */




/* 
// DETAILS
getOneCharacter(characterId) {
    return this.axiosApp.get(`/characters/${characterId}`)
}

// SAVE UPDATE
saveCharacter(characterInfo) {
    return this.axiosApp.post(`/characters`, characterInfo)
}

// UPDATE
editCharacter(characterId, characterInfo) {
    return this.axiosApp.put(`/characters/${characterId}`, characterInfo)
} */