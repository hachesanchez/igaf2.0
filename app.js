require("dotenv").config();
require("./db");

const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "igaf";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;




require('./config/session.config')(app)

app.use((req, res, next) => {
    app.locals.loggedUser = req.session.currentUser
    next()
})

require("./routes")(app)


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const recipesRoutes = require("./routes/recipes.routes");
app.use("/", recipesRoutes);

const chefRecipesRoutes = require("./routes/chef.recipes.routes");
app.use("/", chefRecipesRoutes);

require("./error-handling")(app);

//app.locals.appTitle = `movierecord`
//app.locals.loggedUser = username popino
//app.use((req, res, next)=>{
// console.log("me han obligado")
//})


module.exports = app;
