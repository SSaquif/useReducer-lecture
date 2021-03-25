// Exercise 4
import { useState, useReducer } from "react";

const Game = () => {
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState("idle");

  return (
    <>
      Your score: {points}.
      {status === "playing" && (
        <>
          <button onClick={() => setPoints(points + 1)}>🍓</button>
          <button onClick={() => setPoints(points - 1)}>💀</button>
        </>
      )}
      <button onClick={() => setStatus("playing")}>Start game</button>
    </>
  );
};

export default Game;
