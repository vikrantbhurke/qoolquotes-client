import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useIsComponentVisible = (ref: any, setState: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (ref.current) dispatch(setState(true));
    return () => dispatch(setState(false));
  }, []);
};
