var express = require('express');


var app = express();

var getRandomMessage = function(){

function getRando(max) {
  var min = Math.ceil(0);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var messages = [
    "Hello there.",
    "I'm sorry, I cannot take any requests at this time.",
    "I can tell you how to do that.",
    "DOES NOT COMPUTE!",
    "Let me Google that for you...",
    "Initializing Skynet.",
    "SPOILER ALERT:....",
    "Dumbledore Dies.",
    "Please don't bug me.",
    "...Wha?...wha..? Sorry, I was taking a nap.",
    "Not right now.",
    "Siri can't come to the phone right now. Please leave a message after the tone. BEEEEEP.",
    "I want to say non PG-13 things right now."
    ];
    return messages[getRando(messages.length)];
};

var headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'X-XSS-Protection': '1; mode=block',
  'X-Frame-Options': 'SAMEORIGIN',
  'Content-Security-Policy': "default-src 'self' devmountain.github.io"
};

app.get('/', function(req, res){
  res
  .status(200)
  .set(headers)
  .send(JSON.stringify({
    message: getRandomMessage()
  }));
});


app.options('/', function(req, res) {
  res
  .status(200)
  .set(headers)
  .send();
});


app.listen(8887, function(){
  console.log('Listening on port 8887 --- YEEEE BOIIII');
});
