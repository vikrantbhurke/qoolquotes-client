import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuthReroute = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (auth.id) navigate("/");
  }, [auth, navigate]);
};
