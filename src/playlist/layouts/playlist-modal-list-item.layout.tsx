import { Group, Text } from "@mantine/core";
import { roundBorder, threeBg } from "@/global/styles/app.css";
import { PlaylistQuotesAddRemoveButtonLayout } from "@/playlist-quote/layouts";

export const PlaylistModalListItemLayout = ({ item }: any) => {
  return (
    <Group
      key={item.id}
      bg={threeBg}
      className={roundBorder}
      gap="xs"
      p="sm"
      align="center">
      <PlaylistQuotesAddRemoveButtonLayout pid={item.id} />
      <Text>{item.name}</Text>
    </Group>
  );
};
