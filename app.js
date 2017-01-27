var express = require('express')
var app = express()

app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/views/contact.html')
})
app.get('/',  (req, res) => {
  res.sendFile(__dirname+'/views/index.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})