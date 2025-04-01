const express = require("express");
const app = express();

const http = require("http");

const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);


app.set("view engine", "ejs");
app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("New user connected");
});

io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);
    
    socket.on("sendLocation", (data) => {
        console.log(`Location received from ${socket.id}:`, data);
        io.emit("receiveLocation", {id: socket.id, ...data});
    });
    
    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
        io.emit("userDisconnected", socket.id);
    });
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
