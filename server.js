var express = require('express');


var app = express();

app.listen(8887, function(){
  console.log('Listening on port 8887');
});

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

app.get('/', function(request, response){
  response.send(JSON.stringify({
    message: getRandomMessage()
  }));
});
