// ℹ️ Gets access to environment variables/settings 
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework) 
const express = require("express");

// Handles the handlebars 
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "igaf";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
require('./config/session.config')(app)

require("./routes")(app)


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);


const recipesRoutes = require("./routes/recipes.routes");
app.use("/", recipesRoutes);


const chefRecipesRoutes = require("./routes/chef.recipes.routes");
app.use("/", chefRecipesRoutes);



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

//app.locals.appTitle = `movierecord`
//app.locals.loggedUser = username popino
//app.use((req, res, next)=>{
// console.log("me han obligado")
//})


module.exports = app;
