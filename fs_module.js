var fs=require('fs');
var filesystem={
    read: function(fn){
        fs.readFile('write.txt',function(err,data){
            if(err){
                console.log("you are having error");
            }else{
                console.log(data);
            }
        });     
    }
}
module.exports=filesystem;
