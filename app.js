var express = require("express");
var app = new express();

app.get('/',home);
app.get('/signin/:city',signIn);
app.get('/list/:category',list);


function home(req, res){
    res.send('hello nodejs express...');
}

function signIn(req,res){
    var city = req.params.city;
    res.send('Wellcome to ' + city + ' appeals');
}

function list(req,res){
    var category = req.params.category;
    res.send('List of all articles of ' + category );
}



app.listen(3000, writeConsole);

function writeConsole(){
    console.log('init express app...');
}