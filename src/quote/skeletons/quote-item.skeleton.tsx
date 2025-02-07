import { RootState } from "@/global/states/store";
import { oneBg, roundBorderStyle, twoBg } from "@/global/styles/app.css";
import { quoteCardMaxWidth } from "@/global/styles/global.styles";
import { Center, Group, Skeleton, Space, Stack } from "@mantine/core";
import { useSelector } from "react-redux";

export const QuoteItemSkeleton = () => {
  const { isMobile } = useSelector((state: RootState) => state.view);

  return (
    <>
      <Stack
        p="md"
        h="100%"
        align="center"
        justify="space-between"
        bg={isMobile ? oneBg : twoBg}>
        <Space h={isMobile ? 50 : 90} />

        <Stack
          w={400}
          bg={oneBg}
          className={`${roundBorderStyle}`}
          maw={quoteCardMaxWidth}
          gap="xl"
          p="xl">
          <Stack align="center">
            <Skeleton height={10} radius="sm" width="80%" />
            <Skeleton height={10} radius="sm" width="100%" />
            <Skeleton height={10} radius="sm" width="70%" />
          </Stack>

          <Center>
            <Group miw={100} gap="xs">
              <Skeleton height={10} radius="sm" width="40%" />
              <Skeleton height={10} radius="sm" width="40%" />
            </Group>
          </Center>

          <Center>
            <Group miw={200} gap="md">
              <Skeleton height={20} radius="xl" width="25%" />
              <Skeleton height={20} radius="xl" width="25%" />
              <Skeleton height={20} radius="xl" width="25%" />
            </Group>
          </Center>

          <Center>
            <Group miw={200} gap="md" justify="center">
              <Skeleton height={20} circle />
              <Skeleton height={20} circle />
              <Skeleton height={20} circle />
            </Group>
          </Center>
        </Stack>

        <Space h={isMobile ? 50 : 90} />
      </Stack>
    </>
  );
};
