module.exports = app => {

    // Base routes
    const indexRouter = require("./index.routes");
    app.use("/", indexRouter);

    // Auth routes
    const authRouter = require("./auth.routes");
    app.use("/", authRouter);

    // Recipes Routes
    const recipeRouter = require("./recipes.routes");
    app.use("/", recipeRouter)

    // Chefs Recipes Routes
    const chefRecipesRouter = require("./chef.recipes.routes");
    app.use("/", chefRecipesRouter)

    // Chefs Routes
    const chefsRouter = require("./chefs.routes");
    app.use("/", chefsRouter)

    // User Routes
    const userRouter = require("./user.routes");
    app.use("/", userRouter)


}
