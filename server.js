'use strict';

// Require Express and instantiate it; set port # for HTTP requests
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9001; // it's over 9000!!!

// Set static routes
app.use(express.static('./public'));

app.get('/index.html', function (request, response) {
  response.sendFile('public/index.html', {root: './public'});
})
app.get('*', function (request, response) {
  response.sendFile('public/index.html', {root: './public'});
})
app.listen(PORT, function() {
  console.log('Listening on localhost:', PORT);
})
