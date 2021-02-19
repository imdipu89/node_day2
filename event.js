var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var fs = require('fs');

emitter.on('start_read',function(file_name){
      console.log("Started Reading file....nn");
      fs.readFile(file_name, 'utf8', function (err,data) {
        if (err) {
          emitter.emit('error','from_read');
        }
        else{
            console.log("Done Reading file....nn");
            emitter.emit('print_content',data);
          }
  });

});