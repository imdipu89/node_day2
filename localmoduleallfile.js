var fs=require("fs")
var filesystem=
{
    read:function(fn){
        fs.readFile(fn,function(err,data){
            if(err){
                console.log("error");
            }else{
                console.log(data);
            }
        });
    }
}
module.exports=filesystem;