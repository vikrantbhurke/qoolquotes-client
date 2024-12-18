import { useEffect } from "react";

export const useSocialAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//pl25312526.profitablecpmrate.com/2e/7c/5c/2e7c5c4cd6e038265a8ee38d7a1f85ab.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};
