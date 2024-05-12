const jwt = require("jsonwebtoken");

// -> Responsible for generating tokens for users.
const generateToken = (id) => { // passing in the (id) of the user
    const jwtExpiration = parseInt(process.env.JWT_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000; // Convert days to milliseconds
    return jwt.sign({id}, process.env.jwt_salt, {expiresIn: jwtExpiration});
}

module.exports = generateToken;