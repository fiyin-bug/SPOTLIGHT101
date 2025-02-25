import { useState, useEffect } from 'react';

function useTimer(step) {
  const [timer, setTimer] = useState(600);

  useEffect(() => {
    if (timer > 0 && step === 2) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer, step]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const resetTimer = () => setTimer(600);

  return { timer, formatTime, resetTimer };
}

export default useTimer;