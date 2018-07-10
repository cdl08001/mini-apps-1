var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log('A request has been recieved!')
  next();
})

app.post('/', (req, res, next) => {
  // We will use this middleware to recieve the data
  req.on('data', function(data){
    var recievedData = JSON.parse(data);
    console.log(recievedData);
  })
  req.on('end', function(){
    console.log('We have recieved the data and need to format it')
    next();
  })
})

app.post('/', (req, res, next) => {
  // We will use this middleware to convert the data.
  console.log('We are working on converting the data');
  next()
})

app.post('/', (req, res) => {
  // We will use this middleware to send the data.
  res.send('This is the POST response');
})


app.listen(3000, () => console.log('The server is listening on port 3000!')); 