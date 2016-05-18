'use strict';

module.exports = function () {
  const authenticator = require('authenticator');
  return authenticator.generateKey();
};
