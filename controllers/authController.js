const User = require('../models/users')
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const confirm_password = req.body.confirm_password;
  const gender = req.body.gender;
  const email = req.body.email;

  // Validate if password and confirm password is match
  if (password != confirm_password) {
    res.json({ message: 'Your password is not match!' })
  } else {
    // --Check if email is valid and not exist

    // -- Send veriy code or link to that email

    // Create user record + password hash
    const salt = bcrypt.genSaltSync(10);
    const date = new Date();
    const user = new User({
      username: username,
      password: bcrypt.hashSync(password, salt),
      registerAt: date.toISOString()
    }).save().then(result => {
      res.json({ message: "Your account has been registered!!"})
    }).catch(err => {
      res.json({ message: "Something went wrong!" })
    })
  }
}
exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // Check if username is exist
  User.find({username: username}).then(result => {
    if(result) {
      // if user exist, check given password with the encrypted password
      bcrypt.compare(password, result[0].password, function(err, passwordIsMatch) {
        if(passwordIsMatch) {
          // if password is correct, return success, with cookie save
          res.cookie('username', username, {expire: 3600 * 1000});
          res.cookie('logged-time', new Date().toISOString(), {expire: 3600 * 1000});
          // store user information to session
          req.session.userId = result[0]._id;
          res.json({ message: "You are logged in! "});
        } else {
          // else return fail
          // res.render("signin", {error: true, message: "Password incorrect"});
          res.json({ message: "password is incorrect "})
        }
      })
    } else {
      // if user is not exist, return fail
    }
  }).catch(err => {
    console.log(err);
  })
}

exports.logout = (req, res) => {
  console.log("user log out")
  res.json({ message: "You are logged out"});
}

