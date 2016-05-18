'use strict';

module.exports = function (config) {
  const key = config.key;
  const authenticator = require('authenticator');
  return authenticator.generateToken(key);
};
