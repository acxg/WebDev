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

app.get("/r/:Name", function(req, res){
    var subreddit = req.params.Name;
    res.send("welcome to subreddit " + subreddit.toUpperCase() + " here");
})

app.get("/r/:subReddit/comments/:id/:title", function(req, res){
    console.log(req.params);
    res.send("welcome to the comment");
})