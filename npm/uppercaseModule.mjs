import http from 'http'
import { upperCase } from 'upper-case';
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(upperCase("hello world"));
    res.end();
}).listen(5000)