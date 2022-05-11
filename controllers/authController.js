exports.register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const gender = req.body.gender;
  const email = req.body.email;

  res.json({ message: 'Register done!'})

  // Validate if password and confirm password is match

  // Check if email is valid and not exist

  // -- Send veriy code or link to that email

  // Create user record + password hash

  // response and redirect to login
}

