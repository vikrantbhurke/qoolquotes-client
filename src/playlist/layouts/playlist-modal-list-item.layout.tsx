import { Group, Text } from "@mantine/core";
import { roundBorderStyle, twoBg } from "@/global/styles/app.css";
import { PlaylistQuotesAddRemoveButtonLayout } from "@/playlist-quote/layouts";

export const PlaylistModalListItemLayout = ({ item }: any) => {
  return (
    <Group
      key={item.id}
      bg={twoBg}
      className={roundBorderStyle}
      gap="xs"
      p="xs"
      align="center">
      <PlaylistQuotesAddRemoveButtonLayout pid={item.id} />
      <Text>{item.name}</Text>
    </Group>
  );
};
