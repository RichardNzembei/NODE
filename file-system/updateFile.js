var fs=require('fs')
fs.writeFile('createdFile.html','this is the updated content', function(err){
    if(err)throw err;
    console.log('updated')
})