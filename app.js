var express = require("express");
var app = new express();

app.get('/',home);

function home(req, res){
    res.send('hello nodejs express...');
}

app.listen(3000, writeConsole);

function writeConsole(){
    console.log('init express app...');
}