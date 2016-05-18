'use strict';

module.exports = function (config) {
  const authenticator = require('authenticator');
  const key = config.key;
  const token = config.token;
  return authenticator.verifyToken(key, token);
};
