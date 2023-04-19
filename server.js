const http = require('http');
const app = require('./bot');

const server = http.createServer(app);







const listener = server.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
