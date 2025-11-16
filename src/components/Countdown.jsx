import { useEffect, useState } from 'react'

function getTimeRemaining(targetDate) {
  const total = Date.parse(targetDate) - Date.now()
  const seconds = Math.max(Math.floor((total / 1000) % 60), 0)
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0)
  const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0)
  const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0)
  return { total, days, hours, minutes, seconds }
}

export default function Countdown({ to }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(to))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(to))
    }, 1000)
    return () => clearInterval(timer)
  }, [to])

  const Item = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-semibold text-gray-900 tabular-nums">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="mt-2 text-xs md:text-sm text-gray-500">{label}</span>
    </div>
  )

  return (
    <div className="flex items-center gap-3 md:gap-4">
      <Item value={timeLeft.days} label="Days" />
      <span className="text-xl md:text-2xl text-gray-400">:</span>
      <Item value={timeLeft.hours} label="Hours" />
      <span className="text-xl md:text-2xl text-gray-400">:</span>
      <Item value={timeLeft.minutes} label="Minutes" />
      <span className="text-xl md:text-2xl text-gray-400">:</span>
      <Item value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}
