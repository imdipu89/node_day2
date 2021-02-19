var fs=require('fs');
var content="this is  write file 3";
fs.writeFile('write3.txt',content,function(err,data){
    if(err){
        console.log(" error");
    }else{
        console.log("no error occur");
    }
});
