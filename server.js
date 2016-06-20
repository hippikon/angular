var express = require('express');
var serverapp = express();

serverapp.use(express.static('public'));
/*
serverapp.get('/', function (req, res) {
  res.send('Hello World!');
});
*/
serverapp.get('*', function(req, res) {
	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

serverapp.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});