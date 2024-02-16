const jwt = require("jsonwebtoken");

const jwtSecret = 'Hlo, i am fullstack developer';

const generateToken = (data) => {
    const payload = {
      user: data.email
    };
  
    const options = {
      expiresIn: "24h", // Token expiration time
    };
  
    return jwt.sign(payload, jwtSecret, options);
};

module.exports = generateToken