require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.get('/', function (req, res) {
  res.send('GOATS ROCK')
})
console.log("expresss webserver starting up at port:", port)
app.listen(port)