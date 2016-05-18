'use strict';

const config = require('./config.js')();
const server = require('./server.js')(config);

server.start();
