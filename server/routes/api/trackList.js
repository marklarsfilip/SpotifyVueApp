/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */


var express = require('express');
var request = require('request');

const router = express.Router();

var client_id = 'aa6ab6dfb1e449f0b3ae0f907909a50c'; 
var client_secret = 'fc368810e2c84d428a8519af2f74e8f7';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWXfgo3OOonqa/tracks',//'https://api.spotify.com/v1/users/ullebulle11',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      data = JSON.stringify(body);
      router.get('/', function(req, res) {
        res.send(data);
      });
    });
  }
});


 module.exports = router;
 /*
var request = require('request'); // "Request" library
var express = require('express'); // Express web server framework
var app = express();

app.use(express.static(__dirname + '/public'));


var data = {};



var client_id = 'aa6ab6dfb1e449f0b3ae0f907909a50c'; // Your client id
var client_secret = 'fc368810e2c84d428a8519af2f74e8f7'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/playlists/37i9dQZEVXbLoATJ81JYXz/tracks',//'https://api.spotify.com/v1/users/ullebulle11',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      data = JSON.stringify(body.items);
      app.get('/', function(req, res) {
        res.send(data);
      });
    });
  }
});


console.log('Listening on 5000');
app.listen(5000);
*/
