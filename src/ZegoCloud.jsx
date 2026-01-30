import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function ZegoCloud() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const joinRoom = () => {
    if (roomId.trim()) {
      navigate(`/room/${roomId}`);
    }
  };

  return (
    <div className="app">
      <div className="join-container">
        <h2>Join Room</h2>
        <input
          type="text"
          placeholder="Enter your name to join"
          className="room-input"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button className="join-btn" onClick={joinRoom}>
          Join
        </button>
      </div>
    </div>
  );
}

export default ZegoCloud;