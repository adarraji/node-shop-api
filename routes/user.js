const { veryifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();

router.put("/:id", veryifyTokenAndAuthorization, (req, res) => {

})

module.exports = router;