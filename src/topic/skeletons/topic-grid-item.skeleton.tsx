import { oneBg } from "@/global/styles/app.css";
import { buttonHeight } from "@/global/styles/global.styles";
import { Center, Skeleton } from "@mantine/core";

export const TopicGridItemSkeleton = () => {
  return (
    <>
      <Center h={buttonHeight}>
        <Skeleton bg={oneBg} height={12} radius="sm" width="25%" />
      </Center>
    </>
  );
};
