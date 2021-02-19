var fs=require('fs');
var content="deepanshu";
fs.writeFile('write.txt',content,function(err,data){
    if(err){
        console.log("getting error");
    }else{
        console.log("file run easily");
    }
});