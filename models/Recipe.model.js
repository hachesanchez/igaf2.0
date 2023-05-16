const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            //unique: true,
            trim: true
        },
        cookingTime: {
            type: Number,
            required: true,
            trim: true
        },
        servings: {
            type: Number,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            default: 'https://w7.pngwing.com/pngs/98/723/png-transparent-spoon-and-fork-logo-monumental-restaurant-logo-cafe-others-miscellaneous-food-trademark.png'
        },
        instructions: [{
            type: String
        }],
        ingredients: [{
            amount: {
                type: Number,
            },
            name: {
                type: String,
            }
        }],
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            trim: true
        },
        diets: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
