import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Function to start the timer
  const startTimer = () => {
    setIsActive(true);
  };

  // Function to pause the timer
  const pauseTimer = () => {
    setIsActive(false);
  };

  // Function to reset the timer
  const restartTimer = () => {
    setTime(0);
    setIsActive(false);
  };

  // Handle timer increment every second when active
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  // Handle background color change every 10 seconds
  useEffect(() => {
    const changeBackgroundColor = () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setBackgroundColor(randomColor);
    };

    const colorInterval = setInterval(changeBackgroundColor, 10000);
    return () => clearInterval(colorInterval);
  }, []);

  return (
    <div style={{ backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Timer: {time} sec</h1>
        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={pauseTimer}>Pause</button>
          <button onClick={restartTimer}>Restart</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

