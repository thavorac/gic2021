const express = require('express')
const createError = require('http-errors')
const dotenv = require("dotenv")
const connectDB = require('./services/db')

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./routes')(app)

connectDB().then(
    () => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`server  hosted on localhost:${process.env.PORT}`)
        });
    }
).catch(error => {
    console.log(error)
});

module.exports = app