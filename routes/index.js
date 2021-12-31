var express = require("express");
var router = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

const pathstatic = "D:/login/views";
/* GET home page. */
router.get("/", function (req, res) {
  res.sendFile(path.join(pathstatic + "/login_page.html"));
});

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://suriprj:prashant123@cluster0.umftb.mongodb.net/userDB",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

const userSchema = {
  username: String,
  password: String,
  email: String,
};

const User = mongoose.model("User", userSchema);

router.post("/", (req, res) => {
  let newUser = new User({
    username: req.body.usernameR,
    password: req.body.passwordR,
    email: req.body.emailR,
  });

  newUser.save();
  res.redirect("/");
});
module.exports = router;
