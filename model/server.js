const express = require('express');
const path = require('path');
var app = express();
var pathJoin=path.join(__dirname, '..','view');


const port=process.env.port||3100;

// Returns: '/foo/bar/baz/asdf'



console.log(`direction of view path is: ${pathJoin} `);


app.use(express.static(pathJoin));




var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
