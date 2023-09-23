const jwt = require('jsonwebtoken');

module.exports = authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req._id = data._id;
        req.email = data.email;
        return next();
    } catch {
        return res.sendStatus(403);
    }
};