import express from "express";
import http from "http";
import {Server} from "socket.io"
const app = express();
const httpServer = http.createServer(app);
const PORT = 4000
const io = new Server(httpServer);

app.get('/', (req, res) => {
res.json({data: "hellow world"})
});


io.on("connection", (socket) => {
    console.log  ("Connection is ready");
})

httpServer.listen (PORT, () => {
    console.log ("Listening on port http://localhost:4000");
});

