// App.jsx
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { io } from "socket.io-client";

// ✅ Make sure this URL matches backend
const socket = io("http://localhost:3000");

function App() {

   // ✅ Listen for message from server
    socket.on("receive_message", (data) => {
      console.log("📥 Message from server:", data);
    });

    
  useEffect(() => {
    socket.on("connect", () => {
      console.log("🔌 Connected to socket server:", socket.id);
    });
  }, []);

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;