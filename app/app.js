
const express = require("express");
const { mongoose } = require("mongoose");
const userRoutes = require("../modules/users/users.routes");
const { globalErrHandler } = require("../middlewares/globalErrorHandler");

require("dotenv").config();

const app = express();

mongoose.connect(process.env.mongo_connection, {}).then(() => {
    console.log("Mongo connection successful!");
}).catch(() => {
    console.log("Mongo connection failed");
});
app.use(express.json());

app.use("/api/users", userRoutes);

app.use(globalErrHandler);

module.exports = app
