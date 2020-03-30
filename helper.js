const fs = require("fs");
const file = "todos.json"
let id =0

const readFile = fileName => {
  try {
    return JSON.parse(fs.readFileSync(fileName));
  } catch (e) {
    return [];
  }
};

const writeFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(content));
    console.log("success written to file ");
  } catch (e) {
    console.log(e);
  }
};

const add = (title, body) => {
   checked =false
  let list = readFile(file);

  let index = list.findIndex(x => x.title === title);

  if (index === -1) {
    id= list.length+1
    list.push({ id,title, body ,checked});
  } else {
    console.log('added befor');
    
  }
  writeFile(file, list);
};

const remove = id => {
  let list = readFile(file);

  const filteredList = list.filter(x => x.id !== id);

  writeFile(file, filteredList);
};

const print = () => {
  let list = readFile(file);

  console.log(list);
};

const edit = (id ,title ,body,checked) => {
  let list = readFile(file);

  let index = list.findIndex(x => x.id === id);

  if (index !== -1) {
    list[index].title = title;
    list[index].body = body;
    list[index].checked = checked;
    
  } else {
    console.log(`${id} not found`)
  }
};

module.exports = {
  add,
  remove,
  print,
  edit
 
};