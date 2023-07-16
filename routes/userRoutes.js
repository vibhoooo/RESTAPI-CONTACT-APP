const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userControllers");
const { loginUser } = require("../controllers/userControllers");
const { currentUser } = require("../controllers/userControllers");
const validateToken = require("../middleware/validateTokenHandler");
router.route("/register").post(
	registerUser
);
router.route("/login").post(
	loginUser
);
router.route("/current").get(
	validateToken,
	currentUser
);
module.exports = router;


