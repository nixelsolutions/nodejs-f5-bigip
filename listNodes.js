var iControl = require("icontrol");

var bigip = new iControl({
  host: process.env.F5_HOST,
  proto: process.env.F5_PROTO || 'https',
  port: process.env.F5_PORT || '443',
  user: process.env.F5_USER,
  pass: process.env.F5_PASS,
  strict: false,
  debug: false
});

bigip.list('/ltm/pool', function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data));
});
