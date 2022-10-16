const http = require("http");
const fs = require("fs");
const args = require('minimist')(process.argv.splice(2));
// creating  the variables of the content
let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", function(_err, data) {
  if (_err) {
    throw _err;
  }
  homeContent = data;
});

fs.readFile("project.html", function (_err, data1)  {
  if (_err) {
    throw _err;
  }
  projectContent = data1;
});
// reading the content of registration form 

fs.readFile("registration.html", function (_err, data2){
  if (_err)
  {
        throw _err;    
  }
  registrationContent = data2;
});

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  // passed argument in command line I will be sliced and hold a port number.
  .listen(args.port);