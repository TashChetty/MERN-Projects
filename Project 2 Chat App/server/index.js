import express from 'express';
import http from "http";
import { Server } from "socket.io";
import sockets from './socket/sockets.js';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './api/routes.js';
import cors from 'cors'


await mongoose.connect(
    "mongodb+srv://tashchettydev:0000@cluster0.lfra5hh.mongodb.net/?retryWrites=true&w=majority"
    )


const app = express();
const PORT = 4000;
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: ['https://localhost:3000'], 
    }
})


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.use('/', router);

io.on('connection',sockets)



httpServer.listen(PORT, () => {
    console.log("server is running at http://localhost:4000")
})