var express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require("body-parser");
// const mongoose = require("mongoose")
var app = express();

// Declare and use your middleware
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cookieParser());
app.use(session({
  secret: "this is the secret key",
  name: "sid"
}))
app.use(bodyParser.json())

// Declare your routing
app.get('/', function(req, res) {
  res.send('hello world');
});

// Server side rendering
app.get('/home', function(req, res) {
  res.render('home.ejs', { user: null });
})

app.listen(3000)

// mongoose.connect(".....").then(result => {
//   app.listen(3000)
// })

