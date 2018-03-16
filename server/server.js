var http = require("http"),
    express=require('express'),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 8080;

app=express();
app.get('/',function(req,res){
  res.end('may the forece with you');
});
app.get('/getprise',function(req,res){
  var id=req.query.id;
  console.log(id);
  res.setHeader('Content-Type','text/javascript;charset=UTF-8');
  res.end('{name:"苹果",prise:"'+id+'"}');
});
var server=app.listen(port);
console.log("listen at "+port);