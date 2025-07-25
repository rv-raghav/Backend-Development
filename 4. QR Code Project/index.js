// 1. Use the inquirer npm package to get user input
// 2. use the qr-image npm package to turn the user entered url into a qr code image.
// 3. create a txt file to save the user input using the native fs node module.

import inquirer from 'inquirer'
import qr from"qr-image"
import fs from "fs"
// var qr = require('qr-image');

inquirer
  .prompt([
    /* Pass your questions in here */
    {"message": "Type in your URL: ", 
     "name": "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    
    
fs.writeFile('URL.txt', url, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("file has been saved");
    
  }
});
    // console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });