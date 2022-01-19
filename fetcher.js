const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const localPath = args[1];



const request = require('request'); // http request and wait for response


request(url, (error, response, body) => {
  fs.writeFile(localPath, body, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
  });
});
  


