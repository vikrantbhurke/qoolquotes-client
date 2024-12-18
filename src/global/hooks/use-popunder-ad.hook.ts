import { useEffect } from "react";

export const usePopunderAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//pl25312482.profitablecpmrate.com/19/5b/e4/195be4742cf248b2080822129c530371.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
};
