const { Router } = require("express");
const { UsersController } = require("../controllers/UsersController.js");
const { validate } = require('../../../utils/validators.js')

const router = new Router();

router.post("/register", validate.validateRegisterUser(), UsersController.register);
router.post("/login", validate.validateLogin(), UsersController.login);

module.exports = router;