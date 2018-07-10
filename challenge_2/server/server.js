const express = require('express');

const app = express();

const path = require('path');

const clientDirectory = path.dirname(__dirname) + '/client';

const convertData = require('./formatData');


app.use(express.static(clientDirectory));

app.get('/senddata', (req, res) => {
  res.send('This is the GET response');
});

app.use((req, res, next) => {
  console.log('A request has been recieved!');
  next();
});

app.post('/', (req, res, next) => {
  // We will use this middleware to confirm receipt of the data
  let receivedData;

  req.on('data', (data) => {
    console.log('The server is processing the request...');
    receivedData = JSON.parse(data);
    const convertedData = convertData(receivedData);
    console.log('The data has veen processed: ', convertedData);
  })
    .on('end', () => {
      res.send('This is the POST response');
      next();
    });
});

app.listen(3000, () => console.log('The server is listening on port 3000!'));

/*
TODO:
 - Check the data. If incoming data is undefined, we need to send back and error.
*/
