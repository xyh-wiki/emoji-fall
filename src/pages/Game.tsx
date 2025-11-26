
import React from "react";
import "../styles/cute-theme.css";
import GameBoard from "../components/GameBoard";

const Game: React.FC = () => {
  return (
    <div style={{ padding: "20px 0" }}>
      <GameBoard />
    </div>
  );
};

export default Game;
