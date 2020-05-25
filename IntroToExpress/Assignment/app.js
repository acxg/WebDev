var express = require("express");
var app = express();
app.listen(3000, function(){
    console.log("server listening on 3000");
})

app.get("/", function(req, res){
    res.send("Hi there welcome to my assignment");
})

app.get("/speak/:name", function(req, res){
    var name = req.params.name;
    var sound;
    if (name === "pig") sound = "Oink";
    if (name === "cow") sound = "Moo";
    if (name === "dog") sound = "Woof woof!";
    res.send("The " + name + " says " + sound);
})

app.get("/repeat/:obj/:times", function(req, res){
    var thing = req.params.obj;
    var num = Number(req.params.times);
    var result = "";
    for (var i = 0; i < num; i += 1) {
        result = result + " " + thing;
    }
    res.send(result);
})