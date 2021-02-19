var fs=require('fs');
var module1={
    write1:function(fn, content){
      //  var update="i m in node phase";
        fs.appendFile(fn,content,function(err){
            if(err){
                console.log("getting some error");
            }else{
                console.log("File is done");
            }
        });
    }
}
module.exports=module1;