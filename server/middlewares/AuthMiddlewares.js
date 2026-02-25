const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) {
    return res.status(401).json({ error: "User not logged in" });
  }

  try {
    const validToken = verify(accessToken, "TopSecret");

    req.user = validToken;   // attach decoded payload
    next();                  // no need for extra if check
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { validateToken };