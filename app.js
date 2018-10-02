var express = require('express');
var app = express();
var five = require('johnny-five');
var board = five.Board({port:"COM3"});
var led;

board.on('ready', function(){
    led = new five.Led(7);
});

app.get('/on', function(req, res){
    led.on();
    res.send({'ok' : true});
})

app.get('/off', function(req, res){
    led.off();
    res.send({'led' : false});
})

app.listen(3000, function(){
    console.log('API is working!');
});