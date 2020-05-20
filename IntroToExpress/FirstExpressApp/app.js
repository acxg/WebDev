var express = require("express");
var app = express();

// "/" -> Hi there
app.get("/", function(req, res){
    res.send("Hi there");
})

app.listen(3000, function(){
    console.log("Server listening on port 3000");
})

app.get("/bye", function(req, res){
    res.send("bye!");
})

app.get("/dog", function(req, res){
    console.log("someone made a request to dog!");
    res.send("neow！");
})