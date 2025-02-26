import { useEffect } from "react";
import { RootState } from "../states/store";
import { useSelector } from "react-redux";
import { userUtility } from "@/user/user.utility";

export const useSocialAd = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const isSubscriber = userUtility.isSubscriber(auth.role);

  useEffect(() => {
    const script = document.createElement("script");

    if (!isSubscriber) {
      script.type = "text/javascript";
      script.src =
        "//pl25312526.profitablecpmrate.com/2e/7c/5c/2e7c5c4cd6e038265a8ee38d7a1f85ab.js";
      script.async = true;
      document.body.appendChild(script);
    }
    return () => {
      if (!isSubscriber) document.body.removeChild(script);
    };
  }, []);
};
