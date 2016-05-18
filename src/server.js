'use strict';

module.exports = function (config) {
  const express = require('express');
  const bodyParser = require('body-parser');
  const http = require('http');
  const generateToken = require('./generate_token.js');
  const generateKey = require('./generate_key.js');
  const generateTotpUri = require('./generate_totp_uri');
  const verifyToken = require('./verify_token.js');

  const app = express();
  const jsonParser = bodyParser.json();
  const urlencodedParser = bodyParser.urlencoded({ extended: false });
  const port = config.port;
  const server = http.createServer(app);

  server.start = function () {
    app.listen(port, '0.0.0.0');
  };

  // generate token
  app.post('/token', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const key = req.body.key;
    res.send({ token: generateToken({ key: key }) });
  });

  // generate key
  app.post('/key', function (req, res) {
    res.send({ key: generateKey() });
  });

  // verify token
  app.post('/verification', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const key = req.body.key;
    const token = req.body.token;
    res.send({ result: verifyToken({ key: key, token: token }) });
  });

  app.post('/totp_uri', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const options = {
      key: req.body.key,
      user: req.body.user,
      issuer: req.body.issuer,
    };
    res.send({ uri: generateTotpUri(options) });
  });

  return server;
};
