const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('GOATS ROCK')
})
 
app.listen(3000)