import { quoteUtility } from "@/quote/quote.utility";
import { useEffect, useState } from "react";

export const useCountdownNextUpdate = (refetch: any) => {
  const [countdown, setCountdown] = useState<any>(
    quoteUtility.getNextUpdateTime()
  );

  useEffect(() => {
    // Set up countdown timer that updates every second
    const interval = setInterval(() => {
      setCountdown(quoteUtility.getNextUpdateTime());
    }, 1000);

    // Set a timeout to refetch when the countdown reaches zero
    const timeout = setTimeout(() => {
      refetch();
    }, countdown);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [refetch, countdown]);

  return {
    nextTimeOfDay: quoteUtility.getNextTimeOfDay(),
    countdown: quoteUtility.formatCountdown(countdown),
  };
};
