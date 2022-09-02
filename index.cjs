const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", function (socket) {
  socket.on("disconnect", () => console.log("user disconnected!"));
  console.log("user disconnected!");
});

io.on("message", function(sk){console.log(sk)})
//create a server object:

app.get("*", (req, res) => res.json({message: "Welcome"}))
server.listen(9090, () => console.log("Server started on 9090")); //the server object listens on port 8080
module.exports = server;
