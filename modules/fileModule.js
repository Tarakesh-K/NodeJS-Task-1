const path = require("path");
const directoryPath = "G:/Visual Studio Code/Front End Projects/For Assignment/NodeJS/NodeJS Task-1/uploads/";
const fs = require("fs");
const { create } = require("domain");

const createFiles = () => {

  let currentDate = new Date();
  let date = currentDate.getDate() + "-" + currentDate.getMonth() + "-" + currentDate.getFullYear();
  let time = currentDate.getHours() + "-" + currentDate.getMinutes() + "-" + currentDate.getSeconds();
  let datetime = date + " - " + time + ".txt";

  fs.writeFile(datetime, time, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("File Created");
    }
  });

  let oldFilePath = "G:/Visual Studio Code/Front End Projects/For Assignment/NodeJS/NodeJS Task-1/" + datetime;
  let newFilePath = "G:/Visual Studio Code/Front End Projects/For Assignment/NodeJS/NodeJS Task-1/uploads/" + datetime;
  fs.rename(oldFilePath, newFilePath, renameCallback);

  function renameCallback(err) {
    if (err) {
      console.log('Error in moving file');
      console.log(err.message);
    } else {
      console.log("Moved Successfully");
    }
  }
}; 

module.exports.viewFile = (req, res, next) => {
  res.send(
    `
    <div>
      <h2>"/view" - view all files</h2>
      <h2>"/create" - create a file</h2>
      <h2>"/all" - view all files</h2>
    </div>
    `
  )
}

module.exports.createFile = (req, res, next) => {
  createFiles();
  res.send(
    `
    <div>
      <p>File Created Successfully</p>
    </div>
    `
  );
};

module.exports.allFiles = (req, res, next) => {
  fs.readdir(directoryPath, function(err, files) {
    if(err) {
      return console.log("Unable to scan directory: " + err);
    } else {
      files.forEach(function (file) {
        res.send(file);
        console.log(file);
      });
    };
  });
};