var express = require('express');
var app = express();

var filesize = require('filesize');

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

app.post('/upload', function(req, res){
var size = filesize(parseInt(req.headers['content-length'], 10))
    res.json({"size":size}); 
});

app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT+'!');
});