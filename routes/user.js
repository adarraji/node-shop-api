const verifyToken = require("./verifyToken");
const router = require("express").Router();

router.put("/:id", verifyToken)

module.exports = router;