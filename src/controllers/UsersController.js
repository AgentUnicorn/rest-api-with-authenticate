const {validationResult} = require('express-validator')
const {UsersService} = require("../services/UsersService");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

let register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const {email, username, password} = req.body

    const user = await UsersService.getByEmail(email);
    if (user) {
        res.json({
            message: "User already existed!"
        })
        return
    }

    const userId = await UsersService.register(username, email, password)
    res.json({
        userId
    });
}

let login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const {email, password} = req.body
    const user = await UsersService.getByEmail(email);
    if (!user) {
        res.json({
            message: "User not exist!"
        })
        return
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) return res.status(422).send('Email or Password is not correct');

    const payload = {
        id: user._id,
        username: user.username,
        verified_email: user.verified
    }
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });
    res.json({access_token: token})
}

let UsersController = {
    register,
    login
};

module.exports = { UsersController };
