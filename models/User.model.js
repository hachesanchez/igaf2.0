const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      trim: true,
      required: false
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['USER', 'CHEF', 'ADMIN'],
      default: 'USER'
    },
    profileImage: {
      type: String,
      required: true,
      default: 'https://w7.pngwing.com/pngs/98/723/png-transparent-spoon-and-fork-logo-monumental-restaurant-logo-cafe-others-miscellaneous-food-trademark.png'
    },
    description: {
      type: String,
      required: true,
      default: 'No existe descripción.'
    },
    recipes: [{
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }],
    favRecipes: [{
      recipesFromMongo: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      },
      recipesFromApi: [{
        type: String
      }]
    }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
