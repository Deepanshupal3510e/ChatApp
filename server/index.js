// server.js or index.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

// ✅ Attach socket.io server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("✅ Socket connected:", socket.id);


    socket.on("send_message", (data) => {
    console.log("📩 Message received from client:", data);


  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected:", socket.id);
  });
});
})





server.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
