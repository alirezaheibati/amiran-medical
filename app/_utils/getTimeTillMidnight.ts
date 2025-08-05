type TimeSnapshot = {
  currentTime: string;
  hoursRemaining: number;
  minutesRemaining: number;
  secondsRemaining: number;
};
/**
 * Calculates the current time and how many hours, minutes, and seconds
 * remain until midnight (00:00:00).
 *
 * Useful for countdowns, daily resets, or time-sensitive promotional features.
 *
 * @function
 * @returns {TimeSnapshot} Object containing formatted current time and remaining time units
 */
export function getTimeUntilMidnight(): TimeSnapshot {
  const now = new Date();

  const currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // Get time components
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentSeconds = now.getSeconds();

  // Total seconds until midnight
  const secondsRemaining =
    (23 - currentHours) * 3600 +
    (59 - currentMinutes) * 60 +
    (60 - currentSeconds);

  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  return {
    currentTime,
    hoursRemaining: hours,
    minutesRemaining: minutes,
    secondsRemaining: seconds,
  };
}
