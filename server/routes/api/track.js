/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

//https://t4ils.dev/api/beta/albumPlayCount?albumid=
const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/', (req, res) => {
  var options = {
    url: 'https://t4ils.dev/api/beta/albumPlayCount',//'https://api.spotify.com/v1/users/ullebulle11',
    headers:{
      'Content-Type': 'application/json'
    },
    qs: {
      albumid: req.query.albumid
    },
    json: true
  };
  request.get(options, (error, response, body) => {
    if(response.statusCode === 200) {
      res.send(JSON.stringify(body));
    }
  });
});

module.exports = router;
