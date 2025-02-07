import { oneBg } from "@/global/styles/app.css";
import { Group, Skeleton, Stack } from "@mantine/core";

export const PlaylistListItemSkeleton = () => {
  return (
    <>
      <Stack px="md" gap="xs" justify="center" h={50} bg={oneBg}>
        <Group justify="space-between">
          <Group w="80%">
            <Skeleton height={8} radius="xl" width="20%" />
            <Skeleton circle height={25} />
            <Skeleton height={6} radius="xl" width="15%" />
          </Group>
        </Group>
      </Stack>
    </>
  );
};
