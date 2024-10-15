var fs=require('fs');
fs.rename('createdFile.html','renamedFile.html', function(err){
    if(err) throw err;
    console.log('renamed');
})