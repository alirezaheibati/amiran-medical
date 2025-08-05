"use client";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { getTimeUntilMidnight } from "@/app/_utils/getTimeTillMidnight";
import { useEffect, useState } from "react";

/**
 * A React component that displays a countdown timer until midnight.
 * Converts numeric values into Persian digits and updates every second.
 *
 * The timer resets to `00:00:00` at midnight and visually formats hours, minutes,
 * and seconds. Useful for limited-time discount or promotional offers.
 *
 * @component
 * @returns {JSX.Element} A countdown timer in Persian digits with styled layout
 */
export default function DiscountTimer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    /**
     * Calculate the total remaining seconds until midnight using snapshot values.
     * Start a 1-second interval to decrement and update displayed time.
     */
    const snapshot = getTimeUntilMidnight();
    let totalSeconds =
      snapshot.hoursRemaining * 3600 +
      snapshot.minutesRemaining * 60 +
      snapshot.secondsRemaining;

    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(interval);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }
      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);

      totalSeconds--;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className=" min-w-48 text-white/90">
        <div className=" flex justify-center md:justify-end items-center ">
          <p className="w-12 text-2xl font-semibold text-center">
            {seconds < 10
              ? "۰" + convertToPersianDigits(seconds)
              : convertToPersianDigits(seconds)}
          </p>
          <span>:</span>
          <p className="w-12 text-2xl font-semibold text-center">
            {minutes < 10
              ? "۰" + convertToPersianDigits(minutes)
              : convertToPersianDigits(minutes)}
          </p>
          <span>:</span>
          <p className="w-12 text-2xl font-semibold text-center">
            {hours < 10
              ? "۰" + convertToPersianDigits(hours)
              : convertToPersianDigits(hours)}
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <p className="w-12 text-center text-xs">ثانیه</p>
          <span className="text-transparent">:</span>
          <p className="w-12 text-center text-xs">دقیقه</p>
          <span className="text-transparent">:</span>
          <p className="w-12 text-center text-xs">ساعت</p>
        </div>
      </div>
    </>
  );
}
