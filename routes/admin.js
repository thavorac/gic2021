const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.get("/users", adminController.getUser);

module.exports = router;