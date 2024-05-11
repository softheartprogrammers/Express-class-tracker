const { mongoose } = require("mongoose");
const express = require("express");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.mongo_connection, {}).then(() => {
    console.log("Mongo connection successful!");
}).catch(() => {
    console.log("Mongo connection failed");
});

app.listen(2024, () => {
    console.log("Server started....")
})
