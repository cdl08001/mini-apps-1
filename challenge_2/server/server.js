var express = require('express');
var app = express();
var convertData = require('./formatData')

app.use(function(req, res, next) {
  console.log('A request has been recieved!')
  next();
})

app.post('/', (req, res, next) => {
  // We will use this middleware to confirm receipt of the data
  var receivedData;

  req.on('data', function(data){
    var receivedData = JSON.parse(data);
    var convertedData = convertData(receivedData);
    console.log(convertedData);
  }) 

  req.on('end', function(){
    console.log('We have recieved the data and need to format it')
    next();
  })
})

app.post('/', (req, res) => {
  // We will use this middleware to send the data.

  res.send('This is the POST response');
})


app.listen(3000, () => console.log('The server is listening on port 3000!')); 

/*
TODO:
 - Check the data. If incoming data is undefined, we need to send back and error. 
*/