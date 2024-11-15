import { oneTx, threeBg } from "@/global/styles/app.css";
import { ActionIcon, Group, Pill, Stack, Text } from "@mantine/core";
import {
  IconCopy,
  IconHeart,
  IconPlaylistAdd,
  IconShare,
} from "@tabler/icons-react";

export const QuoteGridItem = ({ item }: any) => {
  return (
    <Stack p="xl" justify="center" align="center">
      <Text ta="center">{item.content}</Text>
      <Text ta="center">{item.author}</Text>

      <Group ta="center" justify="center">
        <Pill size="sm" bg={threeBg}>
          React
        </Pill>
        <Pill size="sm" bg={threeBg}>
          Angular
        </Pill>
        <Pill size="sm" bg={threeBg}>
          Vue
        </Pill>
        <Pill size="sm" bg={threeBg}>
          Svelte
        </Pill>
        <Pill size="sm" bg={threeBg}>
          Solid
        </Pill>
        <Pill size="sm" bg={threeBg}>
          jQuery
        </Pill>
        <Pill size="sm" bg={threeBg}>
          Node
        </Pill>
        <Pill size="sm" bg={threeBg}>
          Deno
        </Pill>
      </Group>

      <Group>
        <ActionIcon bg="transparent" c={oneTx}>
          <IconHeart stroke={1.5} size={20} />
        </ActionIcon>

        <ActionIcon bg="transparent" c={oneTx}>
          <IconCopy stroke={1.5} size={20} />
        </ActionIcon>

        <ActionIcon bg="transparent" c={oneTx}>
          <IconPlaylistAdd stroke={1.5} size={20} />
        </ActionIcon>

        <ActionIcon bg="transparent" c={oneTx}>
          <IconShare stroke={1.5} size={20} />
        </ActionIcon>
      </Group>
    </Stack>
  );
};
