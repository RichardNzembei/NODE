var http=require('http');
var dt=require('./modules/dateModule')
http.createServer(function (req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write('The date and time currently is'+ dt.myDateTime())
    
    res.end();

}).listen(8080)