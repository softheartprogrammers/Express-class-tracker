const mongoose = require("mongoose");

const register = async(req, res) => {
    const usersModel = mongoose.model("users");
    const {email, password, confirm_password, name, balance} = req.body;


    const getDuplicateEmail  = await usersModel.findOne({
        email:email
    })

    if (getDuplicateEmail) throw `${email} already  exists!`;
    const user = await usersModel.create({
        email:email,
         password:password, 
         confirm_password : confirm_password,
          name:name,
           balance:balance
    });

    res.status(201).json({
        status: "Success ✅",
        data: user,
        Message : "User registered successfully"
    });
}

module.exports = register;