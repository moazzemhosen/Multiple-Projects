const express = require("express");
const B2CProductController=require("./controllers/B2CProduct.controller");
const automatingHydroponicsController=require("./controllers/automatingHydroponics.controller")
const app = express();

app.use(express.json());

app.use("/B2Cproducts",B2CProductController)
app.use("/automatingHydroponics",automatingHydroponicsController)

module.exports = app;

