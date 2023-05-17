module.exports = app => {

    const indexRouter = require("./index.routes");
    app.use("/", indexRouter);

    const authRouter = require("./auth.routes");
    app.use("/", authRouter);

    const recipeRouter = require("./recipes.routes");
    app.use("/recipes", recipeRouter)

    const chefRecipesRouter = require("./chef.recipes.routes");
    app.use("/", chefRecipesRouter)

    const chefsRouter = require("./chefs.routes");
    app.use("/chefs", chefsRouter)

    const userRouter = require("./user.routes");
    app.use("/", userRouter)
}