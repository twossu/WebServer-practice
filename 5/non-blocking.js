const fs = require("fs");

const data = fs.readFile("exeample.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log("코드 끝!");
