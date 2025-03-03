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

