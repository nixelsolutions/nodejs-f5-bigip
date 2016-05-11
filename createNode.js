var iControl = require("icontrol");

var bigip = new iControl({
  host: process.env.F5_HOST,
  proto: 'https',
  port: process.env.F5_PORT,
  user: process.env.F5_USER,
  pass: process.env.F5_PASS,
  strict: true,
  debug: process.env.DEBUG || false
});



