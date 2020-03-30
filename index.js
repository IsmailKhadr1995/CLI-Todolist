const commands = require('./helper.js');
const fs = require('fs');

const yargs = require("yargs");


let command = yargs.argv._[0];
let title = yargs.argv.title;
let body = yargs.argv.body;
let id = yargs.argv.id;
let checked= yargs.argv.checked;




if (command === "add") {
  
  if (title && body) {
   
    commands.add(title, body);
    // console.log('added successfuly');
  }
} else if (command === "remove") {
  
  if (id) {
    var todoDeleted =commands.remove(id);
    console.log('deleted successfuly');
    
  }
  
    // var message = todoDeleted ? 'Todo was deleted' : 'Todo not found';
    // console.log(message);
} else if (command === "print") {
  commands.print();
} else if (command === "edit") {
  if (title ,body) {
    commands.edit(id ,title ,body,checked);
  }
} else {
  console.log("ok, this doesnt make any sense");
}