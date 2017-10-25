var express = require('express');
var path = require('path');
var app = express();

var publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

const port = process.env.PORT || 8080;

app.listen(port,() => {
  console.log(`Server is up on port ${port}`);
});
