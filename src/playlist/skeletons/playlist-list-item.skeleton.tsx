import { oneBg } from "@/global/styles/app.css";
import { Group, Skeleton, Stack } from "@mantine/core";

export const PlaylistListItemSkeleton = () => {
  return (
    <>
      <Stack px="md" gap="xs" justify="center" h={50} bg={oneBg}>
        <Group justify="space-between" w="100%">
          <Group w="75%">
            <Skeleton height={10} radius="sm" width="20%" />
            <Skeleton circle height={25} />
            <Skeleton height={6} radius="sm" width="15%" />
          </Group>

          <Group w="20%" gap="xs" justify="end">
            <Skeleton circle height={15} />
            <Skeleton circle height={15} />
            <Skeleton height={15} radius="sm" width="30%" />
          </Group>
        </Group>
      </Stack>
    </>
  );
};
