var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    fs.appendFile('createdFile.html', 'hello content', function(err){
        if(err)throw err;
        console.log('saved') 
})

}).listen(5000)
