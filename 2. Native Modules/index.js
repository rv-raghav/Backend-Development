// using native modules

const fs = require("fs");

// Write to the file
// fs.writeFile("message.txt", "Hello from node.js", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved");


    // Read the file after it's saved
    fs.readFile("./message.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });