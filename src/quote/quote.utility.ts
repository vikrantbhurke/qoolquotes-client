class QuoteUtility {
  getTimeOfDay = () => {
    const hours = new Date().getHours();
    if (hours >= 0 && hours < 6) return "Night";
    if (hours >= 6 && hours < 12) return "Morning";
    if (hours >= 12 && hours < 18) return "Afternoon";
    return "Evening";
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
}

export default QuoteUtility;
export const quoteUtility = new QuoteUtility();
