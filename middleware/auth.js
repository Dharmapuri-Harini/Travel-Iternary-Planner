const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1]; // Bearer token
  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Always standardize to { id: ... }
    req.user = { id: decoded.user?.id || decoded.id };

    next();
  } catch (err) {
    res.status(401).json({ error: "Token is not valid" });
  }
};
