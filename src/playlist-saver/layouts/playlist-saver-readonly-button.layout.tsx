import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const PlaylistSaverReadonlyButtonLayout = () => {
  const navigate = useNavigate();

  const handleNavigateToSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <Button fullWidth bg="green" onClick={handleNavigateToSignIn}>
      Save
    </Button>
  );
};
