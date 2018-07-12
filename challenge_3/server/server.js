const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/', (req, res) => res.send('Hello World!'));

app.post('/user', (req, res) => {
  console.log(req);
  res.send({test: 'User post request recieved'});
});

app.post('/address', (req, res) => {
  res.send({test:'Address post request recieved'})
});

app.post('/CC', (req,res) => {
  res.send({test:'CC post request recieved'})
});

app.listen(3001, () => console.log('Server is running. Listening to Port 3001'));