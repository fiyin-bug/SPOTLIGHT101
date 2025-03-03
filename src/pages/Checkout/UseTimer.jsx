<<<<<<< HEAD
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
=======
"use client"

import { useState, useEffect } from "react"

function useTimer(step) {
  const [timer, setTimer] = useState(900) // 15 minutes in seconds

  useEffect(() => {
    let interval

    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [step, timer])

  const resetTimer = () => {
    setTimer(900) // 15 minutes
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  return { timer, formatTime, resetTimer }
}

export default useTimer

>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227
