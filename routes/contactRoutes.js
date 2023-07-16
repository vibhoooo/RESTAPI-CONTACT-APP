const express = require("express");
const router = express.Router();
const { getContacts } = require("../controllers/contactControllers");
const { createContact } = require("../controllers/contactControllers");
const { getContact } = require("../controllers/contactControllers");
const { putContact } = require("../controllers/contactControllers");
const { deleteContact } = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");
router.route("/").get(
	validateToken,
	getContacts
);
router.route("/").post(
	validateToken,
	createContact
);
router.route("/:id").get(
	validateToken,
	getContact
);
router.route("/:id").put(
	validateToken,
	putContact
);
router.route("/:id").delete(
	validateToken,
	deleteContact
);
module.exports = router;