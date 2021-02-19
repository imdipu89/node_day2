var fs=require('fs');
fs.readFileSync("test.txt");
var data=fs.readFileSync('test.txt');
console.log(data);
module.exports=fs;