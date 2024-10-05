import React, { useState, useEffect } from "react";

const Timer = React.memo(({ isRunning, startTimer, stopTimer, pauseTimer }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h2>Timer Component</h2>
      <p>Time: {time} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={pauseTimer}>Pause</button>
    </div>
  );
});

export default Timer;
