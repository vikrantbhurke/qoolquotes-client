class QuoteUtility {
  getNextTimeOfDay = () => {
    const hours = new Date().getHours();
    if (hours >= 0 && hours < 6) return "Morning";
    if (hours >= 6 && hours < 12) return "Afternoon";
    if (hours >= 12 && hours < 18) return "Evening";
    return "Night";
  };

  // Calculate milliseconds until the next update (6 AM, 12 PM, 6 PM, 12 AM local time)
  getNextUpdateTime = () => {
    const now = new Date();
    const hours = now.getHours();

    // Target times in 24-hour format
    const updateHours = [6, 12, 18, 0];
    let nextUpdate = updateHours.find((h) => h > hours) ?? 24; // Default to next midnight if none found

    // Compute time difference
    const targetTime = new Date();
    targetTime.setHours(nextUpdate, 0, 0, 0);
    if (nextUpdate === 24) targetTime.setDate(targetTime.getDate() + 1);

    return targetTime.getTime() - now.getTime(); // Milliseconds until next update
  };

  // Convert milliseconds to hh:mm:ss format
  formatCountdown = (ms: number) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
}

export default QuoteUtility;
export const quoteUtility = new QuoteUtility();
