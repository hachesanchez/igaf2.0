require("dotenv").config();
require("./db");

const express = require("express");
const hbs = require("hbs");
const app = express();
const { checkRoleInLayout } = require("./middlewares/current-user-ware")
require("./config")(app);


const capitalize = require("./utils/capitalize");
const projectName = "igaf";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;


require('./config/session.config')(app)

app.use(checkRoleInLayout)

require("./routes")(app)

require("./error-handling")(app);



module.exports = app;
