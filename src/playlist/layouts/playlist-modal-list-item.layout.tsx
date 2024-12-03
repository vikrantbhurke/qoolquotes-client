import { Group, Text, useMantineColorScheme } from "@mantine/core";
import { roundBorder } from "@/global/styles/app.css";
import { PlaylistQuotesAddRemoveButtonLayout } from "@/playlist-quote/layouts";
import { getComboboxStyles } from "@/global/styles/global.styles";

export const PlaylistModalListItemLayout = ({ item }: any) => {
  const { colorScheme } = useMantineColorScheme();
  const { optionBg } = getComboboxStyles(colorScheme);

  return (
    <Group
      key={item.id}
      bg={optionBg}
      className={roundBorder}
      gap="xs"
      p="sm"
      align="center">
      <PlaylistQuotesAddRemoveButtonLayout pid={item.id} />
      <Text>{item.name}</Text>
    </Group>
  );
};
