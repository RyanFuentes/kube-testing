const http = require("http");
const os = require("os");

console.log("Kubia starting up");

const www = http.createServer((req, res) => {
  console.log("Received request from " + req.socket.remoteAddress);
  res.writeHead(200);
  res.end("You hit " + os.hostname() + "\n");
});

www.listen(8080);