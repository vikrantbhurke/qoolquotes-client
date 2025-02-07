import { oneBg } from "@/global/styles/app.css";
import { buttonHeight } from "@/global/styles/global.styles";
import { Center, Skeleton } from "@mantine/core";

export const AuthorGridItemSkeleton = () => {
  return (
    <>
      <Center h={buttonHeight}>
        <Skeleton bg={oneBg} height={8} radius="xl" width="25%" />
      </Center>
    </>
  );
};
