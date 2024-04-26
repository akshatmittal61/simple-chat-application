const express = require("express");
const http = require("http");
const { PORT } = require("./config/index.js");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "public")));
io.on("connection", (socket) => {
	console.log("Established WS connection");
});

server.listen(PORT, () => {
	console.info(`Server is listening at http://localhost:${PORT}`);
});
