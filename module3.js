var fs=require('fs');
//const { appendFile } = require('fs/promises');
var module3={
    read:function(fn,content){
        fs.readFile(fn,content,function(err,data){
            if(err){
                console.log("error occur");
            }else{
                console.log("no error");
            }
        });
    },
    write:function(fn,content){
        fs.writeFile(fn,content,function(err,data){
            if(err){
                console.log("error occur");
            }else{
                console.log("no error");
            }
        });
    },
    append3:function(fn,content){
        fs.appendFile(fn,content,function(err,data){
            if(err){
                console.log("error");
            }else{
                console.log("no error");
            }
        });
    }
}
module.exports=module3;