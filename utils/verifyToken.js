const jwt = require("jsonwebtoken");


const verifyToken = (token) => {

// token: The token to be verified.
// decoded is the actual user in which we sign the token with, meaning the user actual data.
    return jwt.verify(token, process.env.jwt_salt, (err, decoded) => {
        // If an error occurs during verification (e.g., invalid signature, expired token), the function returns false to indicate an invalid token.
        if (err) {
            return false;
            
        }else{ // If the verification is successful, the function returns the decoded payload of the token, which typically contains user information or other relevant data.
            return decoded;
        }
    })
}

module.exports = verifyToken;