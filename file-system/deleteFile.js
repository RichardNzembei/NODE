var fs=require('fs')
fs.unlink('createdFile.html', function(err){
    if(err) throw err;
    console.log('file deleted')
})