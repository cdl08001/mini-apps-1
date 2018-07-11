const express = require('express');

const app = express();

const path = require('path');

const clientDirectory = path.dirname(__dirname) + '/client';

const bodyParser = require('body-parser');

const convertData = require('./formatData');


app.use(express.static(clientDirectory));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/senddata', (req, res) => {
  res.send('GET Request Successful');
});

app.post('/senddata', (req, res, next) => {
  convertData(req.body, (convertedData) => {
    res.status(200).send(convertedData);
    next();
  });
});

app.listen(3000, () => console.log('The server is listening on port 3000!'));

/*
TODO:
 - Check the data. If incoming data is undefined, we need to send back and error.
*/
