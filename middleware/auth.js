const jwt = require('jsonwebtoken');


//using JWT to keep session and prevent user to go to other pages
module.exports = function () {
  return function (req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Invalid token format' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // attach user info from token
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
};