import { useLocation } from "react-router-dom";

export const useIsQuotePage = () => {
  const location = useLocation();

  if (
    location.pathname.includes("/quotes") ||
    location.pathname.includes("/feed") ||
    location.pathname === "/"
  )
    return true;
  else return false;
};
