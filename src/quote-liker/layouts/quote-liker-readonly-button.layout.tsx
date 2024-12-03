import { I } from "@/global/components/components";
import { ActionIcon } from "@mantine/core";
import { IconHeartFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const QuoteLikerReadonlyButtonLayout = () => {
  const navigate = useNavigate();

  const handleNavigateToSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <ActionIcon c="crimson" onClick={handleNavigateToSignIn}>
      <I I={IconHeartFilled} />
    </ActionIcon>
  );
};
