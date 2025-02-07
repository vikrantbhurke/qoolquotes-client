import { Center, Group, Skeleton, Stack } from "@mantine/core";

export const QuoteGridItemSkeleton = () => {
  return (
    <Stack gap="xl" p="xl" justify="center" align="center" px="md" w="100%">
      <Stack align="center" w="100%">
        <Skeleton height={8} radius="xl" width="60%" />
        <Skeleton height={8} radius="xl" width="90%" />
        <Skeleton height={8} radius="xl" width="70%" />
        <Skeleton height={8} radius="xl" width="90%" />
        <Skeleton height={8} radius="xl" width="60%" />
      </Stack>

      <Center>
        <Group miw={100} gap="xs">
          <Skeleton height={8} radius="xl" width="40%" />
          <Skeleton height={8} radius="xl" width="40%" />
        </Group>
      </Center>

      <Center>
        <Group miw={200} gap="md">
          <Skeleton height={20} radius="xl" width="25%" />
          <Skeleton height={20} radius="xl" width="25%" />
          <Skeleton height={20} radius="xl" width="25%" />
        </Group>
      </Center>
    </Stack>
  );
};
