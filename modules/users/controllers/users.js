const AsyncHandler = require("express-async-handler");
const usersModel = require("../../../models/users.model");
const { hashPassword, isPassMatched } = require("../../../utils/helpers");
const generateToken = require("../../../utils/generateToken");

// @desc Register admin
// @route POST /api/v1/user/register
// @access Private
exports.registerUser = AsyncHandler(async (req, res) => {
    const {name, email, password, confirm_password,  balance} = req.body;


    const userFound  = await usersModel.findOne({
        email
    })

    if (userFound){
        throw new Error(`User already exists.`)
    }
    const user = await usersModel.create({
        name,
        email,
        password : await hashPassword(password),
        balance,
    });

    res.status(201).json({
        status: "Success ✅",
        data: user,
        Message : "User registered successfully"
    });
});





exports.loginUser =  AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
        // find user
        const user = await usersModel.findOne({
            email
        })

        if(!user){
            return res.json({
                message: "Invalid login credentials. "
            });
        }
        const isMatched = await isPassMatched(password, user.password)
            if(!isMatched) {
                return res.json({
                    message: "Invalid login credentials. "
                });

            }else{
                return res.json({
                    data: generateToken(user._id), // generating the token for the user base on thier id's
                    message: "User logged in successfully",
                });
     }


});




// @desc  Get single admin
// @route GET /api/v1/admins/:id
// @access Private
exports.getUserDashoardProfile = AsyncHandler( async (req, res) => {
    const user = await usersModel.findById(req.userAuth._id).select('-password -createdAt -updatedAt')
    const currentHour = new Date().getHours();

    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    if(!user){
        throw new Error("User not found")
    } else{
        res.status(200).json({
            status: 'success ✅',
            message: `${greeting}  ${user.name} 👋`,
            data: user,
            response: "User profile fetched successfully."
        });
    }
    
})
