const express  = require("express");
const { registerUser, loginUser, getUserDashoardProfile } = require("./controllers/users");
const isLogin = require("../../middlewares/isLogin");




const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/profile/dashboard", isLogin, getUserDashoardProfile);

module.exports  = userRoutes;