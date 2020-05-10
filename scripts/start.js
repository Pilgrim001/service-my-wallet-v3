'use strict';

try {
  require('dotenv').config({path:'.env'});
} catch (e) {
  console.log(e);
} finally {
  var merchantAPI = require('../index.js');
  merchantAPI.start({
    port: process.env.PORT || 8080,
    bind: process.env.BIND || '127.0.0.1'
  });
  if (process.env.RPC) {
    merchantAPI.startRPC({
      api_code: process.env.API_CODE
    });
  }
}
