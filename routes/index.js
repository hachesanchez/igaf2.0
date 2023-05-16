module.exports = app => {

    // Base routes
    const indexRouter = require("./index.routes");
    app.use("/", indexRouter);

    // Auth routes
    const authRouter = require("./auth.routes");
    app.use("/", authRouter);

    // Recipe Routes
    const recipeRouter = require("./recipes.routes");
    app.use("/", recipeRouter)
    // User Routes
    const userRouter = require("./user.routes");
    app.use("/", userRouter)

    // User routes
    /*    const userRouter = require("./user.routes");
       app.use("/", userRouter) */
}
