const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
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
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
