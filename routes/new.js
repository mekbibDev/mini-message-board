const router = require("express").Router();
const { messages } = require("./index");
router.get("/", (req, res, next) => {
  res.render("form", { title: "Add new message" });
});

router.post("/", (req, res, next) => {
  const body = req.body;
  messages.push({ user: body.author, text: body.message, added: new Date() });
  res.redirect("/");
});

module.exports = router;
