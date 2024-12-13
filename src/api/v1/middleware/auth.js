const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.TOKEN_SECRET

const AuthMiddleware = (req, res, next) => {
    console.log('Middleware executed');

    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
    } catch (err) {
        console.log(err)
        return res.status(403).json({ message: 'Invalid or expired token' });
    }

    next();
};

module.exports = AuthMiddleware

