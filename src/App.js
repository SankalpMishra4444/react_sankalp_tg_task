import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Define positions
  const positions = ["top-left", "top-right", "bottom-right", "bottom-left"];
  // State for tracking the block's position
  const [currentPosition, setCurrentPosition] = useState(0);

  // Move Forward
  const moveForward = () => {
    setCurrentPosition((prevPosition) => (prevPosition + 1) % positions.length);
  };

  // Move Backward
  const moveBackward = () => {
    setCurrentPosition((prevPosition) =>
      (prevPosition - 1 + positions.length) % positions.length
    );
  };

  return (
    <div className="app-container">
      {/* Container for block */}
      <div className="block-container">
        <div className={`block ${positions[currentPosition]}`}></div>
      </div>

      {/* Buttons aligned vertically */}
      <div className="button-container">
        <button onClick={moveBackward}>Backward</button>
        <button onClick={moveForward}>Forward</button>
      </div>
    </div>
  );
};

export default App;
