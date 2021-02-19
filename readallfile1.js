var fs1=require('fs');
fs1.readFileSync("test.txt");
var data1=fs1.readFileSync('test.txt');
console.log(data1);
module.exports=fs1;