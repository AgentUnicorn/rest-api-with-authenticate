const { Router } = require("express");
const { BooksController } = require("../controllers/BooksController.js");
const { validate } = require('../../../utils/validators.js')
const AuthMiddleware = require('../middleware/auth')

const router = new Router();

router.get("/", [AuthMiddleware], BooksController.list);

module.exports = router;