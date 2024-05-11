const { mongoose } = require("mongoose");
const express = require("express");
const userRoutes = require("./modules/users/users.routes");
require("dotenv").config();

const app = express();




mongoose.connect(process.env.mongo_connection, {}).then(() => {
    console.log("Mongo connection successful!");
}).catch(() => {
    console.log("Mongo connection failed");
});
require("./models/users.model");
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(2024, () => {
    console.log("Server started....")
})
