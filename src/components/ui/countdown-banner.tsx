import React, { useState, useEffect, useCallback } from 'react'
import { AlertTriangle, Clock } from 'lucide-react'

interface CountdownTimerProps {
  targetHours?: number
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetHours = 48 }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: targetHours,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }

        return { hours, minutes, seconds }
      })
    }

    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = useCallback((time: number): string => {
    return time.toString().padStart(2, '0')
  }, [])

  return (
    <div className="flex items-center gap-2 text-white">
      <Clock className="w-4 h-4" />
      <span className="font-mono text-sm sm:text-base">
        {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
      </span>
    </div>
  )
}

interface PriceBannerProps {
  message?: string
  countdownHours?: number
  backgroundColor?: string
  textColor?: string
}

const PriceBanner: React.FC<PriceBannerProps> = ({
  message = "The price will increase in 48 hours!",
  countdownHours = 48,
  backgroundColor = "#1E3A8A",
  textColor = "white"
}) => {
  return (
    <div 
      className="sticky top-0 z-50 w-full py-3 px-4"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <div className="flex items-center gap-2" style={{ color: textColor }}>
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <span className="font-bold text-sm sm:text-base">
              ⚠️ {message}
            </span>
          </div>
          <CountdownTimer targetHours={countdownHours} />
        </div>
      </div>
    </div>
  )
}

export default PriceBanner