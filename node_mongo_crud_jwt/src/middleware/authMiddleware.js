const jwt = require("jsonwebtoken");

const jwtSecret = "Hlo, i am fullstack developer";

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Missing token" });
  }

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden - Invalid token" });
    }
    //   req.user = user;
    next();
  });
};

module.exports = authenticateToken;
