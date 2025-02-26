import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../states/store";
import { Clearance } from "@/user/enums";

export const usePopunderAd = () => {
  const { auth } = useSelector((state: RootState) => state.auth);

  const hasClearanceThree = Clearance.LevelThree.includes(auth.role);

  useEffect(() => {
    const script = document.createElement("script");

    if (!hasClearanceThree) {
      script.type = "text/javascript";
      script.src =
        "//pl25312482.profitablecpmrate.com/19/5b/e4/195be4742cf248b2080822129c530371.js";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      if (!hasClearanceThree) document.head.removeChild(script);
    };
  }, []);
};
