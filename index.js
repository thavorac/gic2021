require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken")

const app = express();
const authCheck = function (req, res, next) {
  console.log('auth check')
  const token = req.headers.token
  console.log('token', token)
  try {
    const decoded = jwt.verify(token, 'sshhhhh');
    if (decoded) {
      next()
    } else {
      res.json({ message: "You are not real user" })
    }
  } catch (e) {
    res.json({ message: "You are not real user" })
  }
}

app.use(authCheck)

const adminRoutes = require("./routes/admin");
const guestRoutes = require("./routes/guest")

app.use(cookieParser());
app.use(session({
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 1000 * 60 * 60, // 1h expire
    sameSite: true,
    secure: false
  },
  resave: true,
  saveUninitialized: true,
  secret: "this is a secret key",
  name: 'sid'
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', guestRoutes)
app.use('/admin', adminRoutes);

mongoose.connect('mongodb+srv://user1:helloword@cluster0.qyreg.mongodb.net/super_app?retryWrites=true&w=majority',{ 
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(result => {
  console.log("Db is connected");
  app.listen(4000);
}).catch(err => {
  console.log(err);
})