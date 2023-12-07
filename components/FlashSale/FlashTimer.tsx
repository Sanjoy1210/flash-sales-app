"use client"

import { useTimer } from 'react-timer-hook';

type FlashTimerProps = {
    expiryTimestamp: Date,
}

export default function FlashTimer({ expiryTimestamp }: FlashTimerProps) {
    const {
    seconds,
    minutes,
    hours,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div className="flex item-center gap-1.5">
        <div className="bg-primary rounded w-5 text-center text-white text-[10px] font-medium inline-block py-[3px] px-1">
            {hours}
        </div>
        <div className="bg-primary rounded w-5 text-center text-white text-[10px] font-medium inline-block py-[3px] px-1">
            {minutes}
        </div>
        <div className="bg-primary rounded w-5 text-center text-white text-[10px] font-medium inline-block py-[3px] px-1">
            {seconds}
        </div>
    </div>
  )
}
