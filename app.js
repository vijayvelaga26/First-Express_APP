var express= require("express");
var app = express();

//declaring the routes
app.get("/",function(req,res){
    res.send("Hello World!!!");
})

app.get("/new",function(req,res){
    res.send("Just finished creating the first express app !!!! ")
})

app.get("/new/:name",function(req,res){
    var name= req.params.name;
    res.send("Hello "+ name +" ,How are you doing Today?");
})

app.get ("/new/:name/:number",function(req,res){
    var name= req.params.name;
    var number= req.params.number; var print="";
    for(var i=0;i<number;i++){
       print=print +name+ " "; 
    }
    res.send(print)
})

app.get("*",function(req,res){
    res.send("Currently not available , but will be Coming Soon !!!!");
})

app.listen(3000,function(){
    console.log("Server is running on port 3000. Check /new & /new/anyName & /new/anyName/anyNumber");
})

