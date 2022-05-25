const jwt = require("jsonwebtoken")

exports.getUser = (req, res) => {
  const token = req.headers.token
  console.log('token', token)
  const decoded = jwt.verify(token, 'sshhhhh');
  if (decoded) {
    res.json({ message: "you are the real user" })
  } else {
    res.json({ message: "You are not real user" })
  }
}