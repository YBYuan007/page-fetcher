const a = process.argv.slice(2); 
const website = a[0]; 
const destination = a[1]; 
const fs = require("fs");
const request = require("request");

const getFileSize = file => {
  let fileSize = fs.statSync(file).size; 
  return fileSize; 
} 

const writeFile = (fileWrite, content) => {
  fs.writeFile(fileWrite, content, err => {
    if (err){
      console.log("oh oh ", err);
    } 
    console.log(`downloaded and saved ${getFileSize(fileWrite)} bytes to ${destination}`);
  })
}

const getFile = (website) => {
  request(website, (error, response, body) => {
    writeFile(destination, body);
  })
}

getFile(website); 