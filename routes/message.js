const express = require("express");
const router = express.Router();

/* GET message page. */
router.get("/", function (req, res, next) {
  res.render("message", { title: "New Message" });
});

module.exports = router;
