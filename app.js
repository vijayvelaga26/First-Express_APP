var express= require("express");
var app = express();

//declaring the routes
app.get("/",function(req,res){
    res.send("Hello World!!!");
})

app.get("/new",function(req,res){
    res.send("Just finished creating the first express app !!!! ")
})

app.listen(3000,function(){
    console.log("Server is running on port 3000. Check /new url too");
})

