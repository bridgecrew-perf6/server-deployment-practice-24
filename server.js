'use strict';

const express = require('express');
const app = express();

function start(port) {
  app.listen(port,()=> {
    console.log(`running on PORT ${port}`);
  })
}


app.get('/', (req, res) => {
  res.send('Home Route')
})

app.get('/data', (req, res) => {
  res.status(200).send({
    firstName: 'islam',
    lastName: 'Attar',
    email: 'islam@gmail.com'
  })
})















module.exports = {
  app: app,
  start: start
}