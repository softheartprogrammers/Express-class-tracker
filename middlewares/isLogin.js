
const usersModel = require("../models/users.model");
const verifyToken = require("../utils/verifyToken");
// ** checking if a user is logged in or not.
const isLogin = async (req, res, next)=> {
    // get token from header
    const headerObj = req.headers; // OR req.headers.authorization.replace("Bearer ", "")
    const token = headerObj?.authorization?.split(" ")[1];
    const verifiedToken = verifyToken(token); // verify the token that is coming from the header, when it verifies it it also decodes it.
    // ** when u verify the token u might have something like this : { id: '662d1bb19c82035c275218af', iat: 1714299381, exp: 1715336181 }, as what is been decoded.
    if (verifiedToken){
        // find the user
        const user = await usersModel.findById(
            verifiedToken.id
        ).select('name email');
        // save the user into the req.obj
        
        req.userAuth = user;
        next();
    } else{
        const err = new Error('Token expired/invalid');
        next(err);
    }

};

module.exports = isLogin;