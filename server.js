'use strict';

// Set requirements & environment variables; instantiate Express
const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 9001; // it's over 9000!!!

// Set static route
app.use(express.static('./public'));

// Set HTML request route
app.get('/index.html', function (request, response) {
  response.sendFile('/index.html', {root: './public'});
})

// Set proxy route
app.get('/github/*', proxyGitHub);

// Catch any other routes if user mistypes the URL
app.get('/*', function (request, response) {
  response.sendFile('/index.html', {root: './public'});
})

// Set Express to listen on appropriate port
app.listen(PORT, function() {
  console.log('Listening on localhost:', PORT);
})

// Define proxy function
function proxyGitHub(request, response) {
  console.log(`Routing request for ${request.params[0]}`);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}
