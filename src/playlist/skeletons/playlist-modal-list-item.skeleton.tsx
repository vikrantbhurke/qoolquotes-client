import { twoBg } from "@/global/styles/app.css";
import { Group, Skeleton } from "@mantine/core";

export const PlaylistModalListItemSkeleton = () => {
  return (
    <Group bg={twoBg} gap="lg" p="xs" align="center">
      <Skeleton height={24} radius="sm" width="7%" />
      <Skeleton height={10} radius="sm" width="40%" />
    </Group>
  );
};
