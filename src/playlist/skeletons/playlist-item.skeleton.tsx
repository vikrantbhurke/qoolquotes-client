import { RootState } from "@/global/states/store";
import { oneBg, roundBorderStyle, twoBg } from "@/global/styles/app.css";
import { responsiveBreakpoint } from "@/global/styles/global.styles";
import { Box, Group, Skeleton, Space, Stack } from "@mantine/core";
import { useSelector } from "react-redux";

export const PlaylistItemSkeleton = () => {
  const { isMobile } = useSelector((state: RootState) => state.view);

  return (
    <>
      <Box component="div" bg={isMobile ? oneBg : twoBg} h="100%">
        <Stack h="100%" gap="xl" align="center" justify="space-between">
          <Space visibleFrom={responsiveBreakpoint} h={isMobile ? 50 : 90} />

          <Stack
            w={isMobile ? "100%" : 400}
            gap="lg"
            bg={oneBg}
            p={isMobile ? "md" : "xl"}
            className={`${roundBorderStyle}`}>
            <Stack gap="lg">
              <Group gap={8}>
                <Skeleton height={8} radius="xl" width="20%" />
                <Skeleton height={8} radius="xl" width="30%" />
              </Group>

              <Group gap={8}>
                <Skeleton height={8} radius="xl" width="25%" mb="xs" />
                <Skeleton height={8} radius="xl" width="100%" />
                <Skeleton height={8} radius="xl" width="100%" />
                <Skeleton height={8} radius="xl" width="80%" />
              </Group>

              <Group gap={8}>
                <Skeleton height={8} radius="xl" width="20%" />
                <Skeleton height={8} radius="xl" width="20%" />
              </Group>

              <Group>
                <Skeleton height={50} circle />

                <Group gap={8} w="50%">
                  <Skeleton height={8} radius="xl" width="20%" />
                  <Skeleton height={8} radius="xl" width="40%" />
                </Group>
              </Group>
            </Stack>
          </Stack>

          <Space visibleFrom={responsiveBreakpoint} h={isMobile ? 50 : 90} />
        </Stack>
      </Box>
    </>
  );
};
