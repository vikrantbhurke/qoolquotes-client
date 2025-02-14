import { I } from "@/global/components/reusables";
import { ActionIcon } from "@mantine/core";
import { IconHeartFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const QuoteLikerReadonlyButton = () => {
  const navigate = useNavigate();

  const handleNavigateToSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <ActionIcon
      className="exclude"
      c="crimson"
      onClick={handleNavigateToSignIn}>
      <I I={IconHeartFilled} />
    </ActionIcon>
  );
};
