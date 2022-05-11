const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
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