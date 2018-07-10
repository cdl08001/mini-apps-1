var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log('A request has been recieved!')
  console.log('Request: ', req);
  console.log('Response: ', res);
})


app.listen(3000, () => console.log('The server is listening on port 3000!')); 