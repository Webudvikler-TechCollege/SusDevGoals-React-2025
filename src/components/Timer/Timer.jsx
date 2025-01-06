import { useEffect, useState } from "react"
import { TimerStyled } from "./Timer.styled"

export const Timer = () => {
  const [secondsLeft, setSecondsLeft] = useState(0)

  useEffect(() => {
    const targetDate = new Date('January 1, 2030, 00:00:00')

    const updateCountdown = () => {
        const now = new Date().getTime()
        const difference = Math.floor(targetDate - now / 1000)
        setSecondsLeft(difference > 0 ? difference : 0)
    }
    
    updateCountdown()

    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)

  },[])

  return (
    <TimerStyled>
      Nedtælling til Januar 2030: {secondsLeft} sekunder
    </TimerStyled>
  )
}
