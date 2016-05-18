'use strict';

module.exports = function (config) {
  const authenticator = require('authenticator');
  const key = config.key;
  const user = config.user;
  const issuer = config.issuer;
  const algo = config.algo || 'SHA1';
  const digits = config.digits || 6;
  const period = config.periods || 30;

  return authenticator.generateTotpUri(key, user, issuer, algo, digits, period);
};
