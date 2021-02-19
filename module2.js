var fs=require('fs');
var module2={
    write2:function(fn,contant){
        fs.writeFile(fn,contant,function(err){
            if(err){
                console.log("getting some error in write phase");
            }else{
                console.log("no error");
            }
        });
    },
    read2:function(fn,contant){
        fs.readFile(fn,contant,function(err){
            if(err){
                console.log("getting some error in read phase");
            }else{
                console.log("no error");
            }
        });
    },
    append2:function(fn,contant){
        fs.appendFile(fn,contant,
            function(err){
            if(err){
                console.log("getting some error in append phase");
            }else{
                console.log("no error");
            }
        });
    }
}
module.exports=module2;
